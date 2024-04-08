const nodemailer = require('nodemailer');


require ('dotenv').config();


function sendEmail() {
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.User_ID,
      pass: process.env.User_Password
    }
  });

  
  const mailOptions = {
    from:`Sachin Babu E34 <${process.env.User_ID}>`,
    to:"ashin209@gmail.com",
    subject: "NodeMailer Assignment",
    text: "Hello Sir,\n \t This is a confirmation mail for the NodeMailer Assignment"
  };

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
module.exports = sendEmail;
