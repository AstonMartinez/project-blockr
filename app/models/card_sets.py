from .db import db, environment, SCHEMA, add_prefix_for_prod

class CardSets(db.Model):
    __tablename__ = 'card_sets'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    title = db.Column(db.String(100))
    description = db.Column(db.String(100))
    status = db.Column(db.String(100))
    category = db.Column(db.String(100))

    user = db.relationship('User', back_populates='cards')
    questions = db.relationship('CardQuestion', back_populates="set")

    def to_dict(self):
        return {
            'id': self.id,
            'creator_id': self.creator_id,
            'title': self.title,
            'description': self.description,
            'status': self.status,
            'category': self.category
        }
