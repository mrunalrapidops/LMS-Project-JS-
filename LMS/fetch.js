function adddata(){
var siteName='LMSfetch';
localStorage.setItem('siteName',siteName);	
}
function removedata(){
localStorage.removeItem('siteName');	
}
function getdata(){
sitename = localStorage.getItem('siteName');
document.write (sitename);
}


/*setTimeout(adddata(),5000);
setTimeout(getdata(),5000);
setTimeout(removedata(),5000);
*/
//const promise = new Promise((resolve,reject)=>)
const pro = fetch('https://api.myjson.com/bins/17cnou');
 pro.then(res=>res.json())// res.json()also promise
	.then(user=> console.log(user[0].album))//array of objects
	.catch(err => console.log("it's array of objects and somthing going wrong")) 
	console.log("syncronus");
//async await
async function getdata(){
	try{
		const pro = fetch('https://api.myjson.com/bins/17cnou');
		const prom =fetch('https://api.myjson.com/bins/i43cu');
		const pro1 = await	pro;
		const pro2 = await	prom;
	}
	catch(err){
		console.log("err",err);
	}

}
getdata();


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

Promise.all([fwc(),swc(),thwc()]).then(function(){
	console.log("all finish");
})



function tbv(){
var mail = document.getElementById("mail").value ;
var pass = document.getElementById("pass").value ;
//var isAdmin = load()
var name = load(mail,pass);
}
function load(mail,pass) {	
					var a = new Array()
					 var str = JSON.stringify(data);
                     var mydata = JSON.parse(str);
                     if(typeof(mydata) == "object")
                     { 
							var mydata1 = JSON.stringify(mydata);
							var mydata1 = JSON.parse(mydata1);
                     }
                     console.log(name);
                     for(var i = 0;i < mydata1.length; i++)
                     {	
                     	if( mydata1[i].email == mail && mydata1[i].passWord == pass){
                     		a.push(mydata1[i].userName + "login");	
                     	}
                     	
                     	/*console.log(mydata1[i].userName);
                     	a.push(mydata1[i].userName);*/
                     }
                     if(a.length <= 0){
                     	alert("invalid user")
                     }
                     console.log(a);
                 }

/*first(value){	
	return value+2;
}
function second(value){
	return value+2;	
}
function third(value){
	return value+2;
}*/


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
/* Arrow funcion call
var x  = function(a){ return a }
var y = a => a ;
var z = () => {alert ("hi");} ;
console.log(x(5));
console.log(y(6));
function say(){
	console.log("say fun call");
}
console.log("wait start");
setTimeout(say,5000);
//setInterval(say,1000);//continus print
say();
*/
/*console.log("syncronus");
setTimeout(() =>console.log('hllo2'),2000);
Promise.resolve().then( ()=>console.log("timeout3"));
console.log("syncronus4");*/
/*output
syncronus fetch.js:1:1
syncronus4 fetch.js:4:1
timeout3 fetch.js:3:29
roomnot clean fetch.js:18:2
hllo2
*/
/* Dabble user name
for(var i = 0;i < mydata1.length; i++)
                     {	
                     	if(mydata1[i].userName == name){
                     		a.push(mydata1[i].userName);	
                     	}	
                     	console.log(mydata1[i].userName);
                     	a.push(mydata1[i].userName);
                     }
                     if(a.length <= 0){
                     	alert("invalid user")
                     }
                     console.log(a);
                 }
*/