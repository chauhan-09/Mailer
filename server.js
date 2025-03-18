const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); 

app.get('/', (req,res) => {
    res.send('Home Page!');
})

app.listen(PORT, ()=> {
    console.log('Server is running');
})

app.post('/submit-form', (req,res) => {
   
    const data = req.body;
    res.send(data);
    sendmail(data.to,data.sub,data.msg);
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

//sendmail(obj.to,obj.sub,obj.msg); 



