const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b3272a22de000d44bfa0313';
var userId = '5b323d2ff18c2fb4366ae088';

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '5b3374edd032e012888e4f34'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b3374edd032e012888e4f34').then((todo) => {
  console.log(todo);
});
