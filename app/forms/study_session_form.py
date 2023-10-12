from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class NewStudySessionForm(FlaskForm):
    num_correct = IntegerField('num_correct', validators=[DataRequired()])
    num_incorrect = IntegerField('num_incorrect', validators=[DataRequired()])
    out_of = IntegerField('out_of', validators=[DataRequired()])
    time_spent = StringField('time_spent', validators=[DataRequired()])
    session_type = StringField('session_type', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
