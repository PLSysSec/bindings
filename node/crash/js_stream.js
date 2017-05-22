
switch (process.argv[2]) {
  case 'doAlloc':
    J=process.binding('js_stream').JSStream; new J().doAlloc();// tolocalchecked
   break;
  case 'doread':
   J=process.binding('js_stream').JSStream; new J().doRead();
   break;
  case 'readBuffer':
   J=process.binding('js_stream').JSStream; new J().readBuffer()
     break;
  case 'doAfterWrite':
   J=process.binding('js_stream').JSStream; new J().doAfterWrite()
     break;
  case 'finish':
   J=process.binding('js_stream').JSStream; new J().finishShutdown()
     break;
}

