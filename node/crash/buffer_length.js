const dgram = require('dgram');
const util = require('util');
function B() { }
util.inherits(B, Buffer);
const message = new B();
console.log(message instanceof Buffer)

const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) => {
});
//send calls doSend by wrapping message in an array. The binding layer
//UDP::DoSend functiom iterates over all element arrays and just calls
//Buffer::Length directly. The CHECK will cause this to hard crash.
