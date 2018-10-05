var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FicSchema = new Schema({
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
	status: {
		type: String,
		enum: ['in progress', 'abandoned', 'complete'],
		default: 'in progress'
	},
	synopsis: {
		type: String,
		maxlength: 280,
		default: 'No synopsis.'
	},
	language: {
		type: String,
		required: true,
		default: "pt-br"
	},
	category: {
		type: String,
		required: true,
		default: "None"
	},
	genre: {
		type: [String],
		required: true,
		default: ["None"]
	},
	adult_content: {
		type: Boolean,
		required: true,
		default: false
	},
	_chapters: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Chapter'
	}],
	words: {
		type: Number
	},
	views: {
		type: Number,
		default: 0
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

FicSchema.pre('update', function(next) {
  this.update({},{ $set: { updated_at: new Date() } });
});

FicSchema.pre('updateOne', function() {
  this.update({},{ $set: { updated_at: new Date() } });
});

var Fic = mongoose.model('Fic', FicSchema);

module.exports = Fic;
