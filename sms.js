
const accountSid = 'AC0c80c733ea5b462df25f75417ec60b94'
const authToken = 'e2fc1978cabfa8ac07ac898ef7e5fd46'

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+17209657837',
    from: '+12055396513',
    body: 'Hey Tissi, this is your TODO list. Just wanna remind you that you have things todo!'
}).then((message) => console.log(message.sid));
