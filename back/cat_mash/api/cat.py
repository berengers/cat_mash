import random
from datetime import datetime

from cat_mash import app, db
from cat_mash.models import Cat, cat_schema, cats_schema, vs_cats_schema

@app.route('/api/cats', methods=["GET"])
def get_cats():

    cats = Cat.query.order_by(Cat.rate.desc())

    return cats_schema.jsonify(cats)


@app.route('/api/cats/vs', methods=["GET"])
def get_vs_cats():

    max = Cat.query.count()

    cat1 = Cat.query.filter_by(id=random.randint(1, max)).first()
    cat2 = Cat.query.filter_by(id=random.randint(1, max)).first()

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
