const mongodb = require('mongodb');
const mongoose = require('mongoose');
let {taskSchema} = require('./schema');

const uri = ""; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true })
.then(console.log("Success"))

let collection_connection = mongoose.model('task', taskSchema);
exports.task = collection_connection;
