// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 17 2025
// This file contains the JS functions for index.html

"use strict"
// returns a random integer from 1 to 6 into variable "randomNumber"
const randomNumber = Math.floor(Math.random() * 6) + 1

function randomNumberGenerator() {
  // Setting the varibles
  const usserNumber = parseInt(document.getElementById("user-number").value)

  // Cheking usserNumber is equal to randomNumber
  if (usserNumber=== randomNumber){
    // Setting the the statment
    document.getElementById('result').innerHTML = '<p> You have guessed the corecet number!</p>'
  }
  if (usserNumber !== randomNumber) {
    // Setting the the statment
    document.getElementById('result').innerHTML = '<p> The correct number was:' + ' '+ randomNumber + '</p>'
  }
}
