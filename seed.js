require('dotenv').config();
const db = require('./db/index');

db.seed();
console.log('seed finished');
