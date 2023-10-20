from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class NewTaskForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    day = StringField('day', validators=[DataRequired()])
    icon = StringField('icon', validators=[DataRequired()])
    color = StringField('color', validators=[DataRequired()])
    start_time = StringField('start_time', validators=[DataRequired()])
    end_time = StringField('end_time', validators=[DataRequired()])
