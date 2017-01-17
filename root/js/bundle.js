"use strict";

//constructor
var NameFunction = function (n) {
	this.name = '名無し';
}

//constructor
var AgeFunvtion = function (num) {
	this.age = 12;
}

//プロトタイプ
NameFunction.prototype.chengeName = function (name, age) {
	this.age = ageObj.changeAge(age);
	this.name = name;
	var name = '名前は' + this.name + 'だよ。年齢は' + this.age + 'だよ';
	return name;
}

//プロトタイプ
AgeFunvtion.prototype.changeAge = function (age) {
	return age == undefined ? this.age : age;
}


var nameObj = new NameFunction();
var ageObj = new AgeFunvtion();

console.log(nameObj.chengeName('boccs',32));
console.log(nameObj.chengeName('xxxx'));
