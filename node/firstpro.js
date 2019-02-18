const r = require('./log');
r('meassage');
r.log('want to login');

const path = require('path');
var pathofBfile = path.parse(__filename);

console.log(pathofBfile);
console.log(pathofBfile.base);

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.emit('meassageLogger');
emitter.on('meassageLogger',function(){
	console.log("Listner called");
})
/*clear
function sayhello(name){
	console.log("Hello:" + name);
}
sayhello("Mrunal");
*/