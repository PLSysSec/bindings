switch (process.argv[2]) {
  case 'query':
  process.binding('cares_wrap').queryA()
    break;
  case 'getaddrinfo':
  process.binding('cares_wrap').getaddrinfo()
    break;
  case 'getnameinfo':
  process.binding('cares_wrap').getnameinfo()
    break;
  case 'setServers':
  process.binding('cares_wrap').setServers()
}
