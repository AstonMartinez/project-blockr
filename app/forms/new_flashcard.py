from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class UpdateCardForm(FlaskForm):
    front = StringField('front')
    back = StringField('back')
