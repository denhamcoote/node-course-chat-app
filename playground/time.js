const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment(1234);
console.log(date.format('ddd, Do MMM, YYYY (hh:mm:ss) h:mma'));
