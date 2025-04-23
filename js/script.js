
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 17 2025
// This file contains the JS functions for index.html

"use strict"

function randomNumberGenerator() {
  // Generate a new random number each time the function is called
  const positiveNumber = document.getElementById("positive-number").checked;
  //const negativeNumber = document.getElementById("negative-number").checked;

  let randomNumber;

  if (positiveNumber) {
    randomNumber = Math.floor(Math.random() * 6) + 1; // 1 to 6
  } else {
    randomNumber = -1 * (Math.floor(Math.random() * 6) + 1); // -1 to -6
  }
  document.getElementById("result").innerHTML =
    "<p>The random number is: " + randomNumber + "</p>";
}
