"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "hello world of type script";
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'mrunal';
var sentence = "My name is " + name + "\nI am a beginner in Type Script";
/* console.log(sentence);
let index:string = name.indexOf[0];
 console.log(index); */
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Age', 20];
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {})); //like class
var c = color.Green;
//console.log(c);//index in simple array
console.log(c);
var randomValue = 10;
randomValue = 'Mrunal';
randomValue = true; // last value print
console.log(randomValue);
var myVariable = 'Mrunal';
console.log(myVariable.toUpperCase());
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var multiType;
multiType = 20;
multiType = false;
console.log(multiType);
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(typeof (add(5, 6)));
console.log(add(5, 6));
console.log(add(5));
//console.log(isBoolean(this.myVariable)); not working
//interface
function fullName(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: 'Mrunal',
    lastname: 'patadia'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstname + " " + person.lastname);
}
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var Emp1 = new Employee('Mrunal');
console.log(Emp1.employeeName);
Emp1.greet();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating tasks");
    };
    return Manager;
}(Employee));
var manager1 = new Manager('ABC');
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);
