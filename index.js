const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static('Site1'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Site1/index.html');
});

app.get('/buy', (req, res) => {
  var mailOptions = {
    from: 'aerosemail12@gmail.com',
    to: 'sniperud@gmail.com',
    subject:'Someone Bought.',
    text: 'someone copped'
  };

  transporter.sendMail(mailOptions, function(err, info) {
    console.log(`${err} ${info}`);
    res.send('done')
  })

  res.send('done')
})

app.listen(process.env.PORT)
