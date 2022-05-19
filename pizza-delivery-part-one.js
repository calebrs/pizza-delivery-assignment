"use strict";

const { getDeliveryInput } = require("./pizza-delivery-input.js");

function getNumberOfHousesWithPizza(directions) {
  const housesWithPizzaTracker = {"00": true};
  let numberOfHousesWithPizza = 1;
  let currentRow = 0;
  let currentCol = 0;

  for (let indx = 0; indx < directions.length; indx += 1) {
    const direction = directions[indx];

    if (direction === "^") {
      currentRow += 1;
    } else if (direction === "v") {
      currentRow -= 1;
    } else if (direction === ">") {
      currentCol += 1;
    } else if (direction === "<") {
      currentCol -= 1;
    }

    const currentHouse = `${currentRow}${currentCol}`;
    
    if (!housesWithPizzaTracker[currentHouse]) {
      numberOfHousesWithPizza += 1;
      housesWithPizzaTracker[currentHouse] = true;
    }
  }

  return numberOfHousesWithPizza
}

// Final answer
// NOTE: An IIFE is used becuase top level "await" is not allowed
(async function() {
  const input = await getDeliveryInput();
  console.log(getNumberOfHousesWithPizza(input));
})() // 2545

// Test Cases
// console.log(getNumberOfHousesWithPizza("")) // 1
// console.log(getNumberOfHousesWithPizza(">")) // 2
// console.log(getNumberOfHousesWithPizza("^>v<")) // 4
// console.log(getNumberOfHousesWithPizza("^v^v^v^v^v")) // 2