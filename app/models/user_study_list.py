from .db import db, environment, SCHEMA, add_prefix_for_prod

class UserStats(db.Model):
    __tablename__ = 'user_stats'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    trivia_question = db.Column(db.String(100, db.ForeignKey(add_prefix_for_prod("trivia_questions.id"))))
    flash_card = db.Column(db.String(100, db.ForeignKey(add_prefix_for_prod("card_questions.id"))))
    card_set = db.Column(db.String(100, db.ForeignKey(add_prefix_for_prod("card_sets.id"))))

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'trivia_question': self.trivia_question.to_dict(),
            'flash_card': self.flash_card.to_dict(),
            'card_set': self.card_set.to_dict()
        }
