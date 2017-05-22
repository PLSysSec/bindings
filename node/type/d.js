const options = {file:'ls'};
Object.defineProperty(options, 'stdio', {
 get: () => {
   return [1];
 },
 enumerable: true
});
P=process.binding('process_wrap').Process; new P().spawn(options);
