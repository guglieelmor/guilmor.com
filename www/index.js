const express    = require('express');
const sgMail     = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const winston    = require('winston');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

sgMail.setApiKey('');

const Log = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'src/logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'src/logs/combined.log' }),
  ],
});

app.post('/send', async (req, res) => {
  const { to, from, subject, text } = req.body;
  const mail = { to: to, from: from, subject: subject, text: text };
  
  try {
    await sgMail.send(mail);
    Log.info(mail);

    res.status(200).send({
      status: 1,
      message: "Sent with success!"
    });

  } catch (err) {
    Log.error(err);
    
    res.status(500).send({
      status: 0,
      message: "Error send mail."
    });
  }
});

app.listen(2000, () => {
  console.log('Server starting with port 2000.');
});
