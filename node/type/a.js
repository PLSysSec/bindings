const HTTPParser = process.binding('http_parser').HTTPParser;
var parser = new HTTPParser(HTTPParser.REQUEST);
parser.consume(0xdeadbeef);
