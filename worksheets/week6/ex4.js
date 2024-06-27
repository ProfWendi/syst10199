"use strict";
// ex 4 week 6
class Inventory {
  constructor(id, name, price, quantity, rop) {
	this.id = id;
  	this.name = name;
	this.price = price;
	this.quantity = quantity;
  	this.rop = rop;
  }
  toString() {	
    return `${this.id} : ${this.name} (${this.quantity}) ${this.status}`;
  }
  get status() {
  	if (this.quantity == 0) {
		return "OUT OF STOCK";
    } else if (this.quantity <= this.rop) {
      	return "LOW";
    } else 
      	return "";
    }
}

let item1 = new Inventory(132, "Cat Kibble, Tuna", 7.99, 10, 5);
alert(item1);
let item2 = new Inventory(132, "Cat Kibble, Chicken", 7.99, 1, 5);
alert(item2);
let item3 = new Inventory(132, "Cat Kibble, Cricket", 9.99, 0, 5);
alert(item3);

