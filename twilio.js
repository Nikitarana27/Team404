// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
function sms()
{
    const accountSid = process.env.ACffb87ccf579e74a80a6f1ee1ae491ddc;
var authToken="888a3b34696842a4e4ba60d0f92c402d"
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19894873216',
     to: '+919725030987'
   })
  .then(message => console.log(message.sid));
}