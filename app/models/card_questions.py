from .db import db, environment, SCHEMA, add_prefix_for_prod

class CardQuestion(db.Model):
    __tablename__ = 'card_questions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    set_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("card_sets.id")), nullable=False)
    front = db.Column(db.String(100))
    back = db.Column(db.String(100))

    set = db.relationship('CardSets', back_populates='questions')

    def to_dict(self):
        return {
            'id': self.id,
            'set_id': self.set_id,
            'front': self.front,
            'back': self.back
        }
