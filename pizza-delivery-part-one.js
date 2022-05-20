"use strict";

const { getDeliveryInput } = require("./pizza-delivery-input.js");

/*
This function iterates through the input directions and "moves" either the delivery person on a 2d grid. The houses visited by the delivery person are tracked in an object.
Every time a new house is visited, the number of visited houses increasese by 1.
*/
function getNumberOfHousesWithPizza(directions) {
  const visitedHouses = {"00": true};
  let numOfVisitedHouses = 1;
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
    
    if (!visitedHouses[currentHouse]) {
      numOfVisitedHouses += 1;
      visitedHouses[currentHouse] = true;
    }
  }

  return numOfVisitedHouses;
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