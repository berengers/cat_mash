from flask import jsonify

from cat_mash import app, db
from cat_mash.models import Cat

@app.route('/api/stats/rates', methods=["GET"])
def get_stats():
    cats = Cat.query.all()

    count = 0

    for cat in cats:
        count += cat.rate


    return jsonify({ "rates": count })
