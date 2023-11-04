from .db import db, environment, SCHEMA, add_prefix_for_prod

class Application(db.Model):
    __tablename__ = 'applications'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    company = db.Column(db.String, nullable=False)
    job_title = db.Column(db.String, nullable=False)
    deadline = db.Column(db.DateTime)
    job_url = db.Column(db.String)
    salary = db.Column(db.Integer)
    date_applied = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String)
    job_description = db.Column(db.String)
    status = db.Column(db.String)
    notes = db.Column(db.String)
    draggable_id = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'company': self.company,
            'job_title': self.job_title,
            'salary': self.salary,
            'date_applied': self.date_applied,
            'location': self.location,
            'job_description': self.job_description,
            'status': self.status,
            'notes': self.notes,
            'draggable_id': self.draggable_id
        }
