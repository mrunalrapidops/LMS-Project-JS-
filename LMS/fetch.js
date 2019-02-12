
let p = new Promise(function(resolve,reject){
	let isClean = false;
	if(isClean){
		resolve('clean');
	}else{
		reject('not clean');
	}
})
p.then(function(fromResolve){
	console.log('room' + fromResolve);
}).catch(function(fromReject){
	console.log('room' + fromReject);
})
		
let fwc =function(){
	return new Promise(function(resolve,reject){
		resolve('cfw');
	}).catch(function(){
		reject('nfw');
	})
}; 
let swc =function(p){
	return new Promise(function(resolve,reject){
		resolve('csw');
	}).catch(function(){
		reject('nsw');
	})
}; 
let thwc =function(p){
	return new Promise(function(resolve,reject){
		resolve('thfw');
	}).catch(function(){
		reject('nthfw');
	})
}; 

fwc().then(function(){
	return swc();
}).then(function(){
	return thwc();
}).then(function(){
	console.log('finished');
})

/*first(value){	
	return value+2;
}
function second(value){
	return value+2;	
}
function third(value){
	return value+2;
}*/


function tbv(){
var un = document.getElementById("uname").value ;
var pass = document.getElementById("pass").value ;
}

//fetch from myjson.com
/*	fetch('https://api.myjson.com/bins/jer52')
		.then(res => console.log(res.json()))*/
//var today = new Date();

//live time
/*function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  if(h > 12){
  	h = h - 12;
  }
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 1000);
}
startTime();*/