from datetime import datetime

from cat_mash import db, ma

class Cat(db.Model):
    __tablename__ = 'cat'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.Text, nullable=False)
    rate = db.Column(db.Integer, default=0, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)


class CatSchema(ma.ModelSchema):
    class Meta:
        model = Cat
        exclude = ('created_at',)

cat_schema = CatSchema()
cats_schema = CatSchema(many=True)
vs_cats_schema = CatSchema(many=True, only=('id', 'url'))
