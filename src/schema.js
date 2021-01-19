const { Schema } = require('mongoose');

const todoSchema = new Schema({
  task: Schema.Types.String,
  done: Schema.Types.Boolean
})

exports.todoSchema = todoSchema;