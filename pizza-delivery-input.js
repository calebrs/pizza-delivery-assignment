"use strict";

const axios = require("axios");
const deliveryInputUrl = "https://gist.githubusercontent.com/mikedelorenzo-koneksa/3d273f862e919782a181c28ef5f50f54/raw/fba1022779188ae192c45cca92121ba364af60bf/PizzaDeliveryInput.txt"

async function getDeliveryInput() {
  try {
    const res = await axios.get(deliveryInputUrl);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

module.exports.getDeliveryInput = getDeliveryInput;