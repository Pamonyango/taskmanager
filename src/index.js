const express = require('express');    //you are requiring express from modules
require('./db/mongoose');  // requiring the mongoose file in db folder
const useRouter = require('./routers/user');
const taskRouter = require('./routers/task');


// const User = require('./models/user');
// const Task = require('./models/task');//same

const app = express();  //invoking a function
const port = process.env.PORT || 3000;//creating a port(specific ports view specific webpages)

// app.use((re,res, next) => {//before you go to next,you must wait for response
//     res.status(503).send('site is currently down');//
// });
 app.use(express.json());  //we are using express to format anything in the port
app.use(useRouter);
app.use(taskRouter);
 //using asyc-await

//  app.post('/users',  async (req, res) => { //request...response
//      const user = new User(req.body);//

//     //  user.save().then(() => {
//     //      res.status(201).send(user); //201..status codes were created then sent to user
//     //  }).catch((e) {
//     //      res.status(400).send(error);//400...something went wrong
//     //  });
//      try {
//          await user.save();
//          res.status(201).send(user);
//      } catch(e) {
//          res.status(400).send(e);
//      }
//  });

//       //async

//  app.get('/users',async (req, res) => {
//     //  User.find({}).then((users) => {  //find({}) finds detail to all the objects then sends it to users
//     //      res.send(users);
//     //  }).catch((error) => {
//     //      res.status(500).send();
//     //  });
//      try {
//          const users = await User.find({});
//          res.send(users);
//      } catch(e) {
//          res.status(500).send();
//      }
//  });
    
//      // async

//  app.get('/users/:id', async (req, res) => {
//      const _id = req.params.id;
//     //  User.findById(_id).then((user) => {
//     //      if(!user) {
//     //          return res.status(404).send();
//     //      }
//     //      res.send(user);
//     //  }).catch((e) => {
//     //      res.status(500).send();
     

//      try {
//          const user = await User.findById(_id);
//          if (user) {
//              return res.status(404).send();
//          }
//          res.send(!user);
//      } catch(e) {
//          res.status(500).send();
//      }
//     });



//     //
//     app.patch('/users/:id', async(req, res) => {
//         const updates = Object.keys(req.body);
//         const allowedUpdates = ['name','email', 'passwowrd','age'];
//         const isValidOperation = updates.every((update) =>
//         allowedUpdates.includes(update));

//         if (!isValidOperation) {
//             return res.status(400).send({error: 'Invalid Updates '});
//         }
//         try {
//             const user = await User.findByIdAndUpdate(req.params.id,
//             req.body, { new: true, runValidators: true})

//             if (!user) {
//                 return res.status(404).send();
//             }
//             res.send(user);
//         } catch(e) {
//             res.status(400).send(e);
//         }
//     });
 
// app.post('/tasks', async (req, res) => {
//     Task.find({}).then((tasks) => {
//         res.send(tasks);
//     }).catch((e) => {
//         res.status(500).send();
//     });
//     try {
//         const tasks = await Task.find({});
//         res.send(tasks);
//     } catch(e) {
//         res.status(500).send();
//     }
// });
//    //async

// app.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id;
//     // Task.findById(_id).then((task) => {
//     //     if (!task) {
//     //         return res.status(404).send();
//     //     }
//     // }).catch((e) => {
//     //     res.status(500).send();
//     // });
//     try {
//         const task = await Task.findById(_id)

//         if (!task) {
//             return res.status(404).send();
//         }
//         res.send(task);
//     } catch(e) {
//         res.status(500).send();
//     }
// });

//

app.listen(port, () => {
    console.log('Server is up on port' + port);//listening to the port in server
});
//use async await
// app.post('/tasks', async(rew, res) => {
//     const task = new Task (req,body);

//     try{
//         await task.save();
//         res.status(201)
//     }
// })


// const bcrypt = require('bcryptjs');

// const myFunction = async() => {
//     const password = 'batman';
//     const hashedpassword = await bcrypt.hash(password, 8);

//     console.log(password);
//     console.log(hashedpassword);

//     const isMatch = await bcrypt.compare('batman', hashedpassword);
// };

// myFunction();

const jwt = require('jsonwebtoken');

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123'}, 'awesome', { expiresIn: '10 seconds'});
    console.log(token);
    const data = jwt.verify(token, 'awesome');
    console.log(data);
}
myFunction();



