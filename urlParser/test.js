const urlParser = require('./urlParser');

let testUrl = 'http://opentutorials.org:3000/main/test/path?id=HTML&page=12';
const up = new urlParser(testUrl);

console.log(up.show());
console.log(`URI: ${up.getURI()}`); 
console.log(`Protocol: ${up.getProtocol()}`); //http
console.log(`Host: ${up.getHost()}`); //opentutorials.org
console.log(`Port: ${up.getPort()}`); //3000
// 리턴이 void 라서 undefined 뜸
// console.log(`Append Path : ${up.appendPath('econovation')}`); 
console.log(`LastPath: ${up.removeLastPath()}`); //path
console.log(`Path: ${up.getPath()}`); //[main, path] path를 배열로 반환
console.log(`Full Path: ${up.getFullPath()}`);
console.log(`Query String: ${up.getQueryString()}`);
console.log(`Query String Value: ${up.getQueryStringValueOf('page')}`);
