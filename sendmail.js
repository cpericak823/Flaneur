var sendmail = require('sendmail')();

sendmail({
    from: 'no-reply@yourdomain.com',
    to: 'cpericak823@gmail.com',
    subject: 'Your Itinerary',
    html: 'You saved an Itinerary on Flaneur. Log back in to see it. ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});