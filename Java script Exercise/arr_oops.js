// Globle Array
let arr = new Array();
let ori = new Array();
function myFunction() {
 document.getElementById("demo").innerHTML = "Paragraph changed.";
 let Cherries = "sf(variable)"
 arr =  ["Apple", "Orange", "Plum",{"big":"watermalon"},{"small":"kivi"},Cherries]
var start = (new Date).getTime();

for (var i in arr)
 	{	
 		console.log("[i]"+arr[i]);
 		console.log(typeof(arr[i]));
		console.log("--------");
		if(typeof(arr[i]) == "object"){
			console.log("hi");
			var ind = arr.indexOf(arr[i]);
			console.log(ind);
			const k = Object.keys(arr[i]);
 			const v = Object.values(arr[i]);
 			console.log(k,v);
 			ori.push(k+":"+v); 

		}
		else{
			document.getElementById("demo").innerHTML = "current posision : " + arr[i];// current posision
			document.getElementById("demo1").innerHTML = "hole array : " + arr;//hole array
			ori.push(arr[i]);

			
		}
document.getElementById("demo2").innerHTML = "new array : "+(ori.join()); 
var diff = (new Date).getTime() - start;
console.log(diff);
 	}
}
function arrpro(){
	showDiv();	
	document.getElementById("demotitle").innerHTML= "pop()";
	ori.pop();
	document.getElementById("demo").innerHTML = "new array : "+(ori.join()); 
	document.getElementById("demo1title").innerHTML= "splice(1, 1)";
	arr.splice(1, 1)
	document.getElementById("demo").innerHTML = "new array : "+(ori.join()); 
	
	//document.getElementById("demo").innerHTML = "new array : "+(ori.join()); 	
}
function showDiv() {
   document.getElementById('demotitle').style.display = "block";
}
function check(){
	let arr = [1, 0, false];
	alert( arr.indexOf(0) ); // 1
	alert( arr.indexOf(false) ); // 2
	alert( arr.indexOf(null) ); // -1
	alert( arr.includes(1) ); // true

}

function perticularthing(){

	let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: {"nike name":"nik"}}
];
//document.getElementById("aai").innerHTML = users;
let user = users.find(item => item.name == "Pete");
//alert(user.id); // John	
}

function Iterables(){
let range = {from: 1,to: 5};
range[Symbol.iterator] = function() 
{
  return { 
  			current: this.from,
    		last: this.to,
    	next() {
      		if (this.current <= this.last) {
        	return { done: false, value: this.current++ };
      		}
      		else {
        		return { done: true };
      		}
    		   }
  		};
};
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
	}
}
function map(){
    document.getElementById("a").innerHTML="Array->object->MAP";
    let m = new Map();
    m.set(1,"no");
    m.set("nikname",{"nikname":"nik"});
    map.keys()
    alert( m.get("nikname") );//undefine  
}

function json(){// simple json array of object
let user = {name: "John",age: 30,add:{str:"navrangpura",city:"ahm"},child:["1","2"]}
user = JSON.stringify(user);
user = JSON.parse(user);
alert(typeof(user));
alert(user.add.str);
alert(user.child[0]);
let person =[{
		name: "abc",
		Age:10
	},
	{
		name: "def",
		Age:20
	},
	{
		name: "ghi",
		Age:30
	}];
	var output='';
	for(var i=0;i<person.length;i++){
		output += '<li>'+person[i].name+'</li>';
	}
	document.getElementById("a").innerHTML=output;
}
function json_external(){ //json from external page
	//http request from javascript
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   			var response =JSON.parse(xhttp.responseText);
   			var people = response.people;
   			var output='';
	for(var i=0;i<people.length;i++){
		output += '<li>'+people[i].name+'</li>';
	}
	document.getElementById("a").innerHTML=output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
} 
function gttersetter(){
	let user = {
	  name: "John",
	  surname: "Smith",

	  get fullName() {
	    return `${this.name}`;
	  }
	};
	alert(user.fullName); // John Smith
}

//alert(user); // {name: "John", age: 30}
/*
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);*/
 
	

//alert(user); // {name: "John", age: 30}

 //document.write(arr.join());// print holke array
 /*var ind = 2//arr.indexOf(i)
 arr.splice(ind, 0, ind);
 document.write(arr.join());*/

	/*console.log("arr"+arr);*/
 		/*console.log("------------");
 		 		console.log("i"+i);*/
 		/*//arr[] = "pufferfish";
 		if(typeof(arr[i])=="object"){
 			var ind = arr.indexOf(i);// toget index value
 			"pufferfish";
 			const k = Object.keys(i)
 			const v = Object.values(i)
 			console.log(k);
 			console.log(v);
 			arr[ind] = 'k : v'   
 			//arr.push(key+":"+values);
 			//arr.splice(ind,0,{Keys:"Test"});// go infinite
 			//document.write(arr.join());
  			//arr.splice(index, 0, key );
 		}
 		else{
 			document.getElementById("demo1").innerHTML = arr ;
 		}*/
 /*function ok(){
	let user = new Map();
	user.set("age", "30");
	user.set({"abc":"def"}, "John");
	for (let [key, value] of user.entries()) {
	  alert(`${key}:${value}`); // name:John, then age:30
	}
}*/
/*function ok(){ // array with in array
	let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
}*/
/*let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};
*/
//alert(user); // {name: "John", age: 30}		
