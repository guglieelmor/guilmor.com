const express    = require('express');
const sgMail     = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const winston    = require('winston');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://guilmor.com'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

sgMail.setApiKey('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');

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
    Log.info({ mail: mail });
    await sgMail.send(mail);

    res.status(200).send({
      status: 1,
      message: "Sent with success!"
    });

  } catch (err) {
    Log.error({ mail: mail, err: err });
    
    res.status(500).send({
      status: 0,
      message: "Error send mail."
    });
  }
});

app.listen(2000, () => {
  console.log('Server starting with port 2000.');
});
