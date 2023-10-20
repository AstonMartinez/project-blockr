from .db import db, environment, SCHEMA, add_prefix_for_prod

class UserStats(db.Model):
    __tablename__ = 'user_stats'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    trivia_results = db.Column(db.String(100))
    javascript_stats = db.Column(db.String(100))
    python_stats = db.Column(db.String(100))
    react_stats = db.Column(db.String(100))
    csharp_stats = db.Column(db.String(100))
    cplusplus_stats = db.Column(db.String(100))
    java_stats = db.Column(db.String(100))
    nextjs_stats = db.Column(db.String(100))
    angular_stats = db.Column(db.String(100))
    typescript_stats = db.Column(db.String(100))
    rust_stats = db.Column(db.String(100))
    general_stats = db.Column(db.String(100))
    sql_stats = db.Column(db.String(100))

    user = db.relationship("User", back_populates="stats")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'javascript': self.javascript_stats,
            'python': self.python_stats,
            'react': self.react_stats,
            'c#': self.csharp_stats,
            'c++': self.cplusplus_stats,
            'java': self.java_stats,
            'nextjs': self.nextjs_stats,
            'angular': self.angular_stats,
            'typescript': self.typescript_stats,
            'rust': self.rust_stats,
            'sql': self.sql_stats,
            'general_knowledge': self.general_stats
        }
