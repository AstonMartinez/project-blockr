from .db import db, environment, SCHEMA, add_prefix_for_prod

class AppliedApp(db.Model):
    __tablename__ = 'applied_applications'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    apps_list = db.Column(db.String)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'apps': self.apps_list
        }
