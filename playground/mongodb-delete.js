// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  db.collection('Todos').findOneAndDelete({ text: 'Eat lunch' })
  .then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log('Unable to delete docs', err);
  });

  // client.close();
});
