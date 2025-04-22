// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 17 2025
// This file contains the JS functions for index.html

"use strict"
// returns a random integer from 1 to 6 into variable "randomNumber"
const randomNumberPositive = Math.floor(Math.random() * 6) + 1; // 1 to 6
//const randomNumberNegative = -1 * (Math.floor(Math.random() * 6) + 1)// -1 to -6

function randomNumberGenerator() {
  // Generate new random numbers each time the function is called

  // Get user input values
  const positiveNumber = parseInt(document.getElementById("positive-number").checked);
  const negativeNumber = parseInt(document.getElementById("negative-number").checked);

  // Check if positive number matches
  if (positiveNumber === randomNumberPositive) {
    document.getElementById('result').innerHTML =
      '<p>The random number is: ' + positiveNumber + '</p>';
  } else {
    (negativeNumber === randomNumberNegative) 
      document.getElementById('result').innerHTML =
        '<p>The random number is: ' + negativeNumber + '</p>'
  
}
}