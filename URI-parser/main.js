const URIParser = require('./URIParser');

let uri = "https://localhost:3000/my/info/main?id=HTML&page=12";

const up = new URIParser(uri);
console.log("getURI:", up.getURI());
console.log("getProtocol:", up.getProtocol());
console.log("getHost:", up.getHost());
console.log("getPort:", up.getPort());

console.log(up.getPath());
console.log("getFullPath: ", up.getFullPath());

up.appendPath("hi");
console.log(up.getPath());
console.log("getFullPath: ", up.getFullPath()); 
console.log("removePath:", up.removeLastPaht());
console.log("getQueryString:", up.getQueryString());
console.log("getQueryStringValueOf(id):", up.getQueryStrigValueOf("id"));
console.log("getQueryStringValueOf(page):", up.getQueryStrigValueOf("page"));
console.log("lastPath:", up.getLastPath());