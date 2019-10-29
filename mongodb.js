// CRUD create, read, update, delete
const { MongoClient,ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL,{useNewUrlParser: true },(error, client) =>{
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);
    //
    });

//db.collection('users').updateOne({
// id:new objectID("5db1ac2cb1632836bc094a39")
//}, {
//  $inc: {
 //   age: 3
 // }
//}).then((result) => {
  //console.log(result);
//}).catch((error) => {
//  console.log(error);
//});

 //db.collection('tasks').updatetoMany({
  // completed: false
 //}; {
  // $set: {
  //   completed:true
  // }
  // .then((result) => {
  //   console.log(result.modifiedCount);
  // }).catch((error) => {
   //  console.log(error);
  // });

  db.collection('tasks').deleteOne({
    description: 'Clean the house'
  })
  // db.collection('users').insertOne({
  //     name: 'Greg',
  //    age:29
  //    });

  //  db.collection('users').insertMany([
  //      {
  //          name: 'Greg',
  //          age: 29
  //      },{
  //          name: 'Jean',
  //          age: 8
  //      }
  //  ],(error,result) => {
  //      if (error) {
  //          return console.log('unable to insert documents');
  //      }
  //  console.log(result.ops);
  //  });

  //  db.collection('tasks').insertMany([
  //      {
  //          description:'clean the house',
  //          completed: true
  //      },{
  //          description:'Renew inspection',

  //          completed: false
  //      },{
  //          description:'pot plants',
  //          completed: false
  //      }
  //  ],(error, result) => {
  //      if (error) {
  //          return console.log('Unable to insert tasks');
  //      }
  //      console.log(result.ops);
  //  });
 // db.collection('tasks').find({ completed: false}).toArray((error,
   // tasks) => {
     // console.log(tasks);
   // });
//});







const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const task = new Task({
  description: 'Eat lunch'
})






