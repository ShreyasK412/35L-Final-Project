from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_marshmallow import Marshmallow 

import os

app = Flask(__name__)
ma = Marshmallow(app)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy()

db.init_app(app)
class Posts(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String(255))
	content = db.Column(db.Text)
	#author = db.Column(db.String(255))
	date_posted = db.Column(db.DateTime, default=datetime.utcnow)

	def __init__(self, title, content):
		self.title=title
		self.content=content

class PostSchema(ma.Schema):
  class Meta:
    fields = ('id', 'title', 'content','date_posted')

# Init schema
post_schema = PostSchema(strict=True)
posts_schema = PostSchema(many=True, strict=True)

@app.route('/post', methods=['POST'])
def add_post():
  title = request.json['title']
  content = request.json['content']


  new_post = Posts(title, content)

  db.session.add(new_post)
  db.session.commit()

  return post_schema.jsonify(new_post)

	
if __name__=="__main__":
    app.run(debug=True)
