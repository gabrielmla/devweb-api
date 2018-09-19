var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FicSchema = new Schema({
	profile_name: {
		type: String,
		minlength: 5,
		maxlength: 18
	}
});

var Fic = mongoose.model('Fic', FicSchema);

module.exports = User;
