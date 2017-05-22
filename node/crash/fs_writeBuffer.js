const util = require('util');
const fs = require('fs');
function FB() {}
util.inherits(FB, Buffer);
fs.write(0, new FB(), 0, 0, 0);
