var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',

  auth:{
    user:'evanpulse@outlook.com',
    pass: '017new20',
  }
});

var mailOptions = {
  from: 'evanpulse@outlook.com',
  to: 'evanpulse92@gmail.com',
  subject: 'Testing Node Js Mail',
  text: 'That is easy!'
}

transporter.sendMail(mailOptions,function(error,info){
  if (error){
    console.log(error);
  } else {
    console.log('Email sent: '+ info.response);
  }
});
