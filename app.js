const express = require('express');
const sendEmail = require('./NodeMailer')

const app = express();


require ('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/nodemail', (req, res) =>{
 sendEmail();
 res.send('Mail Sent');
});
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})