const express = require('express');    //you are requiring express
require('./db/mongoose');  // requiring the mongoose file in db folder
const User = require('./model/user');//same
const Task = require('./model/task');//same

const app = express();  //invoking a function
const port = process.env.PORT || 3000;//creating a port(specific ports view specific webpages)
 app.use(express.json());  //we are using express to format anything in the port
 app.post('/users', (req, res) => { //request...response
     const user = new User(req.body);//
     user.save().then(() => {
         res.status(201).send(user);//201..status codes were created then sent to user
     }).catch((error) => {
         res.status(400).send(error);//400...something went wrong
     });
 });

 app.get('/users', (req, res) => {
     User.find({}).then((users) => {  //find({}) finds detail to all the objects then sends it to users
         res.send(users);
     }).catch((error) => {
         res.status(500).send();
     });
 });

 app.get('/users/:id', (req, res) => {
     const _id = req.params.id;
     User.findById(_id).then((user) => {
         if(!user) {
             return res.status(404).send();
         }
         res.send(user);
     }).catch((e) => {
         res.status(500).send();
     });
 });
 
app.post('/task', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }).catch((e) => {
        res.status(500).send();
    });
});

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send();
        }
    }).catch((e) => {
        res.status(500).send();
    });
})
app.listen(port, () => {
    console.log('Server is up on port' + port);
});