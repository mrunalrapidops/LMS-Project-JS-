
var url = 'http://mylogger.io/log';
module.exports = log1;//not object  direct call
module.exports.log = log1;

function log1(message){
	console.log(message);
}

const path = require('path');
var pathofBfile = path.parse(__filename);
console.log(pathofBfile);