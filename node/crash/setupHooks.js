const obj = {};
Object.defineProperty(obj, 'init', {
  get: () => { throw 'w00t'; },
  enumerable: true
});
process.binding('async_wrap').setupHooks(obj);
