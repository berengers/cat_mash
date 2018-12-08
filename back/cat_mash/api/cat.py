from flask import jsonify
import random
from datetime import datetime

from cat_mash import app, db
from cat_mash.models import Cat, cat_schema, cats_schema, vs_cats_schema
from flask import request

@app.route('/api/cats', methods=["GET"])
def get_cats():
    cats = Cat.query \
        .order_by(Cat.rate.desc()) \
        .order_by(Cat.updated_at.desc()) \
        .offset(int(request.args.get('page', 0)) * int(request.args.get('page_size', 3))) \
        .limit(int(request.args.get('page_size', 3))) \
        .all()

    res = cats_schema.dump(cats)

    if len(res.errors) > 0:
        return jsonify({"errors": res.errors})

    return jsonify({
        "total": Cat.query.count(),
        "cats": cats_schema.dump(cats).data
    })
    


@app.route('/api/cats/vs', methods=["GET"])
def get_vs_cats():

    max = Cat.query.count()

    v1 = random.randint(1, max)
    v2 = random.randint(1, max)

    while v1 == v2:
        v2 = random.randint(1, max)

    cat1 = Cat.query.filter_by(id=v1).first()
    cat2 = Cat.query.filter_by(id=v2).first()

    return vs_cats_schema.jsonify([cat1, cat2])


@app.route('/api/cats/<id>', methods=["PUT"])
def put_cat(id):

    cat = Cat.query.filter_by(id=id).first()

    if not cat:
        return "no cat with this id", 404

    cat.rate = int(cat.rate) + 1
    cat.updated_at = datetime.utcnow()

    db.session.add(cat)
    db.session.commit()

    return ""
