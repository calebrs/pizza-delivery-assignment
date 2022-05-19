"use strict";

const { getDeliveryInput } = require("./pizza-delivery-input.js");

function getNumberOfHousesWithPizza(directions) {
  let numberOfHousesWithPizza = 1;
  const housesWithPizzaTracker = {"00": true};
  const humanLocation = {row: 0, col: 0};
  const goatLocation = {row: 0, col: 0};
  const nextHouse = {
    "^": obj => obj["row"] += 1,
    "v": obj => obj["row"] -= 1,
    ">": obj => obj["col"] += 1,
    "<": obj => obj["col"] -= 1
  }

  const editTracker = obj => {
    const currentHouse = `${obj["row"]}${obj["col"]}`;

    if (!housesWithPizzaTracker[currentHouse]) {
      numberOfHousesWithPizza += 1;
      housesWithPizzaTracker[currentHouse] = true;
    }
  }

  for (let indx = 0; indx < directions.length; indx += 1) {
    const direction = directions[indx];

    if (indx % 2 === 0) {
      nextHouse[direction](humanLocation);
      editTracker(humanLocation);
    } else {
      nextHouse[direction](goatLocation);
      editTracker(goatLocation);
    }
  }

  return numberOfHousesWithPizza
}

// Final answer
(async function() {
  const input = await getDeliveryInput();
  console.log(getNumberOfHousesWithPizza(input));
})() // 2511

// Test Cases
// console.log(getNumberOfHousesWithPizza("^v")) // 3
// console.log(getNumberOfHousesWithPizza("^>v<")) // 3
// console.log(getNumberOfHousesWithPizza("^v^v^v^v^v")) // 11