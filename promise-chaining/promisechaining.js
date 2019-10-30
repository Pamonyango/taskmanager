require('../src/db/mongoose');
const User = require('../src/model/user');
 User.findByIdAndUpdate('5db2f4f37a264921db6fa79b', {age: 19}).then((user) => {
     console.log(user);
     return User.countDocuments({age: 19});
 }).then((result) => {
     console.log(result);
 }).catch((e) => {
     console.log(e);
 });