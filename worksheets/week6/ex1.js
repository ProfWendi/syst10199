"use strict";
// ex 1 week 6
function createInventory(id, name, price, quantity, rop) {
	return {
  	id,
    name,
    price, 
    quantity,
    rop
  };
}

let item = createInventory(132, "Cat Kibble, Tuna", 7.99, 10, 5);
console.log(item);
