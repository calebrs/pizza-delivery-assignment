"use strict";

const { getDeliveryInput } = require("./pizza-delivery-input.js");

/*
This function iterates through the input directions and "moves" either the goat or human on a 2d grid. The goat and human move on every other iteration.
The houses visited by the human and goat are tracked in an object. Every time a new house is visited, the number of visited houses increasese by 1.
*/
function getNumberOfHousesWithPizza(directions) {
  let numOfVisitedHouses = 1;
  const visitedHouses = {"00": true};
  const humanLocation = {row: 0, col: 0};
  const goatLocation = {row: 0, col: 0};
  const nextHouse = {
    "^": obj => obj["row"] += 1,
    "v": obj => obj["row"] -= 1,
    ">": obj => obj["col"] += 1,
    "<": obj => obj["col"] -= 1
  }

  // Function created to reduce redundant code and nested if statements.
  const addHouse = location => {
    const currentHouse = `${location["row"]}${location["col"]}`;

    if (!visitedHouses[currentHouse]) {
      numOfVisitedHouses += 1;
      visitedHouses[currentHouse] = true;
    }
  }

  for (let indx = 0; indx < directions.length; indx += 1) {
    const direction = directions[indx];

    if (indx % 2 === 0) {
      nextHouse[direction](humanLocation);
      addHouse(humanLocation);
    } else {
      nextHouse[direction](goatLocation);
      addHouse(goatLocation);
    }
  }

  return numOfVisitedHouses;
}

// Final answer
// NOTE: An IIFE is used becuase top level "await" is not allowed
(async function() {
  const input = await getDeliveryInput();
  console.log(getNumberOfHousesWithPizza(input));
})() // 2511

// Test Cases
// console.log(getNumberOfHousesWithPizza("^v")) // 3
// console.log(getNumberOfHousesWithPizza("^>v<")) // 3
// console.log(getNumberOfHousesWithPizza("^v^v^v^v^v")) // 11