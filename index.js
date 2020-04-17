const connectToMongoDB = require('./methods/connectToMongoDB');
const to = require('./methods/to');
const hashPassword = require('./methods/hashPassword');
const validatePassword = require('./methods/validatePassword');

module.exports = {
  connectToMongoDB,
  to,
  hashPassword,
  validatePassword,
};
