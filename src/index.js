const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();//invoking 
const port = process.env.PORT || 3000;//creating a port and file to read the num

app.use(express.json());//using a variable from express,structured form,use is a method in express

app.post('/users', (req, res) => { //create,request and resend
    const user = new User(req.body);//what is typed in Json

    user.save().then(() => {
        res.status(201).send(user);//created status and send
    }).catch((error) => {
        res.status(400).send(error);//not created
    });
});

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
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

app.listen(port, () => {
    console.log('server is up on port' + port);
});

