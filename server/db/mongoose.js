var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp');
// let db = {
//     localhost: 'mongodb://localhost:27017/TodoApp',
//     mlab: 'mongodb://test:test123@ds259253.mlab.com:59253/node_todo_app'
// };

// mongoose.connect(db.mlab || db.localhost);
module.exports = { mongoose };