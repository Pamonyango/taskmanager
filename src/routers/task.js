const express = require('express');
const user = require('../models/task');
const router = new express.Router();

router.post('/tasks', async (req, res) => {
   Task.find({}).then((tasks) => {
       res.send(tasks);
   }).catch((e) => {
       res.status(500).send();
   });
   try {
       const tasks = await Task.find({});
       res.send(tasks);
   } catch(e) {
       res.status(500).send();
   }
});
  //async

router.get('/tasks/:id', async (req, res) => {
   const _id = req.params.id;
   // Task.findById(_id).then((task) => {
   //     if (!task) {
   //         return res.status(404).send();
   //     }
   // }).catch((e) => {
   //     res.status(500).send();
   // });
   try {
       const task = await Task.findById(_id)

       if (!task) {
           return res.status(404).send();
       }
       res.send(task);
   } catch(e) {
       res.status(500).send();
   }
});
router.delete('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!user) {
            return res.status(404).send();
        }
        res.send(task);
    }catch (e) {
        res.status(500).send();
    }
});

module.exports = router;

//

// app.listen(port, () => {
//    console.log('Server is up on port' + port);