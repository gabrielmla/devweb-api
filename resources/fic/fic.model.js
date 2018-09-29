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
		required: true
	},
	genre: {
		type: [String],
		required: true
	},
	adult_content: {
		type: Boolean,
		required: true,
		default: false
	},
	_chapters: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Chapter'
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

var Fic = mongoose.model('Fic', FicSchema);

module.exports = Fic;
