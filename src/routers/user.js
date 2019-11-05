const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

 router.post('/users',  async (req, res) => { //request...response
    const user = new User(req.body);//

   //  user.save().then(() => {
   //      res.status(201).send(user); //201..status codes were created then sent to user
   //  }).catch((e) {
   //      res.status(400).send(error);//400...something went wrong
   //  });
    try {  //a feauture used when something is successful
        await user.save();//saving to the user
        res.status(201).send(user);//
    } catch(e) {
        res.status(400).send(e);
    }
});
router.post('/users/login', async (req, res) => {//router for login post for creating
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);//finding email and paswword

        const token = await user.generateAuthToken();
        res.send({user, token});
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
});
router.get('/users',async (req,res) => {
    res.send(req.user);
});

     //async

router.get('/users',async(req, res) => {
   //  User.find({}).then((users) => {  //find({}) finds detail to all the objects then sends it to users
   //      res.send(users);
   //  }).catch((error) => {
   //      res.status(500).send();
   //  });
    try {
        const users = await User.find({});
        res.send(users);
    } catch(e) {
        res.status(500).send();
    }
});
   
    // async
router.get('/users/:id', async (req, res) => {
    const id = req.params.id;
   //  User.findById(_id).then((user) => {
   //      if(!user) {
   //          return res.status(404).send();
   //      }
   //      res.send(user);
   //  }).catch((e) => {
   //      res.status(500).send();
    

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch(e) {
        res.status(500).send();
    }
   });



   //
   router.patch('/users/:id', async(req, res) => {
       const updates = Object.keys(req.body);
       const allowedUpdates = ['name','email', 'passwowrd','age'];//declaring a variable
       const isValidOperation = updates.every((update) =>//using every method to check each value
       allowedUpdates.includes(update));

       if (!isValidOperation) {//if there is smthing not matching,should send error
           return res.status(400).send({error: 'Invalid Updates '});//
       }
       try {
          const user = await User.findById(req.params.id);

          updates.forEach((update) => {
              return user[update] = req.body[update];
          });
          await user.save();//what is saved is left in database

           if (!user) {
               return res.status(404).send();
           }
           res.send(user);
       } catch(e) {
           res.status(400).send(e);
       }
   });

//    router.post('/tasks', async (req, res) => {
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
//  });
//    //async
 
//  router.get('/tasks/:id', async (req, res) => {
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
//  });
 
 //
 
 router.delete('/users/:id', async (req, res) => {//
     try{
         const user = await Task.findByIdAndDelete(req.params.id);
 
         if(!user) {
             return res.status(404).send();
         }
         res.send(user);//after deleting user we send to postman
     }catch (e) {
         res.status(500).send();
     }
 });

module.exports = router;//exporting the module

