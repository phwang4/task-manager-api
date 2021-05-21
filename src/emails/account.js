const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const myEmail = 'patrick.hwang4@gmail.com'
const sendWelcomeEmail = (email, name) => {
    sgMail.send({ 
        to: email,
        from: myEmail,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: myEmail,
        subject: 'Thank you for your business!',
        text: `Goodbye ${name}. Is there anything else we could have done to keep you onboard?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}