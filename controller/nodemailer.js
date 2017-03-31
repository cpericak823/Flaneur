
// 'use strict';
// const bunyan = require('bunyan');
// const nodemailer = require('../lib/nodemailer');

// // Create a SMTP transporter object
// let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'guidemeinc2017',
//         pass:  'flaneur2017'
//     },
//     logger: bunyan.createLogger({
//         name: 'nodemailer'
//     }),
//     debug: true // include SMTP traffic in the logs
// }, {
//     // sender info
//     from: 'GuideMe, Inc',
// });

// console.log('SMTP Configured');

// // Message object
// let message = {

//     // Comma separated list of recipients
//     to: 'Andris Reinman <andris.reinman@gmail.com>',

//     // Subject of the message
//     subject: 'Your Saved Itinerary', 

//     // plaintext body
//     text: 'Hello, you recently saved an Itinery on Flaneur. Log back in at flaneur.herokuapp.com to view it.',

//     // HTML body
//     html: '<p>Hello,</p>' +
//         '<p>you recently saved an Itinery on Flaneur. Log back in at flaneur.herokuapp.com to view it.</p>',
// };

// console.log('Sending Mail');
// transporter.sendMail(message, (error, info) => {
//     if (error) {
//         console.log('Error occurred');
//         console.log(error.message);
//         return;
//     }
//     console.log('Message sent successfully!');
//     console.log('Server responded with "%s"', info.response);
//     transporter.close();
// });