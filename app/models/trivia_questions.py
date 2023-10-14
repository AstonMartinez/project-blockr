from .db import db, environment, SCHEMA, add_prefix_for_prod

class TriviaQuestion(db.Model):
    __tablename__ = 'trivia_questions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    quiz_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("trivia_quizzes.id")), nullable=False)
    question = db.Column(db.String(500), nullable=False)
    answer_one = db.Column(db.String(500), nullable=False)
    answer_two = db.Column(db.String(500), nullable=False)
    answer_three = db.Column(db.String(500))
    answer_four = db.Column(db.String(500))
    category = db.Column(db.String(500))
    solution = db.Column(db.String(500), nullable=False)
    status = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'quiz_id': self.quiz_id,
            'question': self.question,
            'answer_one': self.answer_one,
            'answer_two': self.answer_two,
            'answer_three': self.answer_three,
            'answer_four': self.answer_four,
            'category': self.category,
            'solution': self.solution,
            'status': self.status
        }
