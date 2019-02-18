function Prototypalinheritance(){
	let animal = {
		  eats: true,
		  walk: true,
		  fun : function() {
    		return this.eats + " " + this.walk;
    		}
	};
	let rabbit = {  //new object
	  jumps: true
	};


	var turtle = new MAP({
	type:["Seaturtl","Tortoises"],
	jumps: false,
	swim: [{Seaturtl :true},{Tortoises :false}],
	fun : function(){ return this.type; }
	});
/*rabbit.__proto__ = animal; // hidden Property inharite animal
document.getElementById('in1key').innerHTML = Object.keys(animal)[0] + ":" + rabbit.eats;
document.getElementById('in1').innerHTML = "eats :" +rabbit.eats ;
document.getElementById('in2key').innerHTML ="walk :" + rabbit.walk;//value only
document.getElementById('in2').innerHTML = Object.keys(animal)[1] + ":" + rabbit.walk;// from rabbit
document.getElementById('in2').innerHTML = "Function call:" + rabbit.fun();// from rabbit
*/
tutrtle.__proto__ = animal;
/* 
document.getElementById('in1key').innerHTML = Object.keys(animal)[0] + "for:" + tutrtle.eats;
*/
}
function nativeprototype(){
	String.prototype// convert object
	String.prototype.show = function() {
  	alert(this);
	};
	"BOOM!".show(); // BOOM!
	let animal = {
  		eats: true
		};

	// create a new object with animal as a prototype
	let rabbit = Object.create(animal);
	alert(rabbit.eats); // true
	alert(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit

	//alert(typeof(String.prototype));//object
	/*obj = new Object() //new constructor
	alert(obj.__proto__ === Object.prototype); // true
	let arr = [1, 2, 3];
	alert( arr.__proto__ === Array.prototype ); // true
	alert( arr.__proto__.__proto__ === Object.prototype ); // true
	alert( arr.__proto__.__proto__.__proto__ ); // null*/
	}
/*	function User(name) {
	  this.sayHi = function() {
	    alert(name);
	  };
	}

	let user = new User("John");
	user.sayHi(); // John
*/
Function User(name,birth){ //function or class
	this._name = name;
	alert (name);
}