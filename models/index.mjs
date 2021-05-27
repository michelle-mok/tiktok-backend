import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import userModel from './user.mjs';
import videoModel from './video.mjs';
import likeModel from './like.mjs';
import followModel from './follow.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Video = videoModel(sequelize, Sequelize.DataTypes);
db.User = userModel(sequelize, Sequelize.DataTypes);
db.Like = likeModel(sequelize, Sequelize.DataTypes);
db.Follow = followModel(sequelize, Sequelize.DataTypes);

// // OPTION 1: through tables
// A user posts many videos
db.User.hasMany(db.Video);
db.Video.belongsTo(db.User);

// A video can be liked by many other users
db.User.belongsToMany(db.Video, { through: db.Like });
db.Video.belongsToMany(db.User, { through: db.Like });

db.Video.hasMany(db.Like);
db.Like.belongsTo(db.Video);
db.User.hasMany(db.Like);
db.Like.belongsTo(db.User);

// OPTION 2: DEFINING FOREIGN KEYS
// db.User.hasMany(db.Video, { foreignKey: 'userId' });
// db.Video.belongsTo(db.User);
// db.Video.hasMany(db.Like, { foreignKey: 'videoId' });
// db.Like.belongsTo(db.Video);
// db.User.hasMany(db.Like, { foreignKey: 'userId' });
// db.Like.belongsTo(db.User);

// a user can have many followers
db.User.belongsToMany(db.User, {
  as: 'follower',
  foreignKey: 'followerId',
  allowNull: false,
  through: db.Follow,
})
db.User.belongsToMany(db.User, {
  as: 'followed',
  foreignKey: 'followedId',
  allowNull: false,
  through: db.Follow,
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
