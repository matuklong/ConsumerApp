var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'comsumerapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/comsumerapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'comsumerapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/comsumerapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'comsumerapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/comsumerapp-production'
  }
};

module.exports = config[env];
