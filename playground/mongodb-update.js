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
  db.collection('Users').findOneAndUpdate({
      username: 'Jane'
    },
    {
      $set: {
        username: 'Roi'
      },
      $inc: {
        age: 10
      }
    },
    {
      returnOriginal: false
    }
  )
  .then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to update docs', err);
  });

  // client.close();
});
