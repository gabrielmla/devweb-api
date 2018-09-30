var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChapterSchema = new Schema({
	title: {
		type: String,
		required: true,
		maxlength: 40
	},
	_author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	_fic: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Fic',
		required: true
	},
  notes: {
    type: String,
    maxlength: 140
  },
  text: {
    type: String,
    required: true
  },
	words: {
		type: Number
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

ChapterSchema.pre('update', function() {
  this.update({},{ $set: { updated_at: new Date() } });
});

ChapterSchema.pre('findOneAndUpdate', function() {
  this.update({},{ $set: { updated_at: new Date() } });
});

ChapterSchema.pre('save', function(next) {
  this.words += this.text.length;
  next();
});

var Chapter = mongoose.model('Chapter', ChapterSchema);

module.exports = Chapter;
