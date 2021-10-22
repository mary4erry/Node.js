const nodemailer = require('nodemailer')

const smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'ivanovamaria1988@gmail.com',
    password: 'Mmarikmark9031988'
  }
})

smtpTransport.sendMail({
  from: 'Maria <ivanovamaria1988@gmail.com>',
  to: 'Masha <ivanovamaria1988@gmail.com>',
  subject: 'Mail subject',
  // text: 'some Mail text', 
  html: '<b>Some html code</b>'
}, (err, res) => {
  if (err) {
    throw err
  } else {
    console.log('Message has been sent');
  }

  smtpTransport.close()
})
