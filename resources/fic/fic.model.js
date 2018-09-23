var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FicSchema = new Schema({
	title: {
		type: String,
		required: true,
		maxlength: 40
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	status: {
		type: String,
		enum: ['in progress', 'abandoned', 'complete']
	},
	synopsis: {
		type: String,
		maxlength: 280,
		default: 'No synopsis.'
	},
	language: {
		type: String,
		required: true
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
		required: true
	},
	chapters: {
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

module.exports = User;
