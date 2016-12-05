 var moment  = require('moment');

 console.log(moment().format());

 //January 1st 1970 @ 12:00am -> 0
 //January 1st 1970 @ 12:01am -> 60

var now = moment();
 console.log('current timestamp', now.unix());

//Working with an existing time
 var timestamp = 1480941208;
 var currentMoment = moment.unix(timestamp);
 console.log('current moment', currentMoment.format('MMM D,YY @ h:mm a'));

 //turn the currentMoment into this format
 //January 3rd, 2016 @ 10:23 AM
 console.log('current moment', currentMoment.format('MMMMM Do,YYYY @ h:mm A'));

