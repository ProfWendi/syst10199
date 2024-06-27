"use strict";
// ex 2 week 6
function Inventory(id, name, price, quantity, rop) {
	this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.rop = rop;
  this.toString = function() {
  	return `${this.id} : ${this.name} (${this.quantity})`;
  };
}

let item = new Inventory(132, "Cat Kibble, Tuna", 7.99, 10, 5);
console.log(item);
alert(item);
