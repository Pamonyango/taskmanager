//Goal: Use asyc await
//1.create deleteTaskAndCount as an asyc function
//-Accept id of task to remove
//2.use await to delete task and count up incomplete tasks
//3.return the count
//4. call the function and attach  the/catch to log results
//5.test your work




require('../src/db/mongoose');//connecting to database
const Task = require('../src/models/Task');

const deleteTaskAndCount = async (id) => {  //only one parameter,id to be deleted 
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false }); //task is an object,checks on the false one
    return count;
};
deleteTaskAndCount('5db80852bca50b1c9808a636').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});