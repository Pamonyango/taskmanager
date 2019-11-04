require('../src/db/mongoose');//connecting to database
const User = require('../src/models/user');//creating const user to file models

//  User.findByIdAndUpdate('5db2f4f37a264921db6fa79b', {age: 19}).then((user) => {//finding user via id,age and update
//      console.log(user);
//      return User.countDocuments({age: 19});//return the promise
//  }).then((result) => {//then means promise
//      console.log(result);//returning the user result
//  }).catch((e) => { //catching any errors
//      console.log(e); //returning error
//  });

//using async-await

 const updateAgeAndCount = async (id, age) => {   
     const user = await User.findByIdAndUpdate(id, {age});
     const count = await User.countDocuments({ age });
     return count;
 };

 updateAgeAndCount('5db8362fd4ae1d2e7fc79744' ,42).then((count) => {
     console.log(count);
 });