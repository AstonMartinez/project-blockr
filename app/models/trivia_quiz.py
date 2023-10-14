from .db import db, environment, SCHEMA, add_prefix_for_prod

class TriviaQuiz(db.Model):
    __tablename__ = 'trivia_quizzes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    from .db import db, environment, SCHEMA, add_prefix_for_prod

class TriviaQuestion(db.Model):
    __tablename__ = 'trivia_quizzes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    title = db.Column(db.String(500), nullable=False)
    description = db.Column(db.String(500))
    length = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(500))

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'description': self.description,
            'length': self.length,
            'category': self.length
        }
