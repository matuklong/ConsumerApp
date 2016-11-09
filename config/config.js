var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var configDB = require('./config/dbuser.js');

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'comsumerapp'
    },
    port: process.env.PORT || 3000,
    db: configDB.Development.url
  },

  test: {
    root: rootPath,
    app: {
      name: 'comsumerapp'
    },
    port: process.env.PORT || 3000,
    db: configDB.Test.url
  },

  production: {
    root: rootPath,
    app: {
      name: 'comsumerapp'
    },
    port: process.env.PORT || 3000,
    db: configDB.Production.url
  }
};

module.exports = config[env];
