switch (process.argv[2]) {
 case 'string':
   process.binding('buffer').indexOfString();
 case 'buffer':
   process.binding('buffer').indexOfBuffer();
 case 'number':
   process.binding('buffer').indexOfNumber();
}
