from .db import db, environment, SCHEMA, add_prefix_for_prod

class StudySession(db.Model):
    __tablename__ = 'study_sessions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    num_correct = db.Column(db.Integer, nullable=False)
    num_incorrect = db.Column(db.Integer, nullable=False)
    out_of = db.Column(db.Integer, nullable=False)
    time_spent = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False)
    session_type = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(200), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'correct': self.num_correct,
            'incorrect': self.num_incorrect,
            'out_of': self.out_of,
            'time_spent': self.time_spent,
            'date': self.date_created,
            'type': self.session_type,
            'category': self.category
        }
