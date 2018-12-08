from flask import jsonify
from sqlalchemy import func

from cat_mash import app, db
from cat_mash.models import Cat

@app.route('/api/stats/rates', methods=["GET"])
def get_stats():
    qry = db.session.query(func.sum(Cat.rate)).all()

    total = qry[0][0]

    return jsonify(total)
