const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5500;

app.get('/', (req,res) => {
    res.send('Home Page!');
})

app.listen(PORT, ()=> {
    console.log('Server is running');
})

const transporter = nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:465,
    auth: {
        user:process.env.sender_email,
        pass:process.env.pass,
    },
});

function sendmail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    });

    console.log('email sent');
}

sendmail("nsc7574@gmail.com","Congratulations","You have Reached 2000 elo in chess");



