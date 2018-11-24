// config/db.js
module.exports = {
  url: "mongodb://" + proccess.env.DB_USER + ":" + proccess.env.DB_PASSWORD + "@ds143683.mlab.com:43683/fanfic-p3",
  local_url: "mongodb://localhost:27017/fanfic-dev"
};
