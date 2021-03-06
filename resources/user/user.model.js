var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

var UserSchema = new Schema({
  profile_name: {
    type: String,
    minlength: 5,
    maxlength: 18
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 18
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateEmail,
      message: "Invalid email"
    }
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  birthday: {
    type: Date
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"]
  },
  description: {
    type: String,
    maxlength: 140,
    default: "No description."
  },
  _fics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fic"
    }
  ],
  _chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter"
    }
  ],
  fav_fics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fic"
    }
  ],
  social: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String }
  },
  is_admin: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.generateHash = password => {
  return bcrypt.hash(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = (password, userPassword) => {
  return bcrypt.compareSync(password, userPassword);
};

var User = mongoose.model("User", UserSchema);

module.exports = User;
