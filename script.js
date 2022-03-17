"use strict";

function romanTime() {
  // get the current hour, minute, second
  const d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();

  function getTens(anyNumber) {
    let tens = Math.floor(anyNumber / 10);
    return tens;
  }

  function getOnes(timeUnit, anyNumber) {
    let ones = timeUnit - 10 * anyNumber;
    return ones;
  }

  let tensHours = getTens(hour);
  // let onesHours = hour - 10 * tensHours;
  let onesHours = getOnes(hour, tensHours);

  let tensMinutes = getTens(minute);
  // let onesMinutes = minute - 10 * tensMinutes;
  let onesMinutes = getOnes(minute, tensMinutes);

  let tensSeconds = getTens(second);
  // let onesSeconds = minute - 10 * tensMinutes;
  let onesSeconds = getOnes(second, tensSeconds);

  function toRoman(lastDigit, firstDigit, middleDigit, countTo) {
    let romanNumerals = ""; // holds decimal numbers converted to Roman numerals
    for (let i = 0; i < countTo; i++) {
      if (i === 8) {
        romanNumerals = lastDigit; // should be 'IX', 'XC' or 'CM'
        break; // exit loop as we have reached last digit
      }
      if (i !== 4) {
        romanNumerals += firstDigit; // add an 'I', 'X' or 'C'  if the number is NOT 5
      } else {
        romanNumerals = romanNumerals.substring(1); // if number is 5 remove the preceding character. for example, IV becomes V
      }
      // if number is 4
      if (i === 3) {
        romanNumerals += middleDigit; // add a 'V', 'L' or 'D'
        romanNumerals = romanNumerals.substring(3); // cuts off the first two 'i's
      }
    }
    return romanNumerals;
  }
  let time = "";
  time += toRoman("xc", "x", "l", tensHours);
  time += toRoman("ix", "i", "v", onesHours);
  time += ":";
  time += toRoman("xc", "x", "l", tensMinutes);
  time += toRoman("ix", "i", "v", onesMinutes);
  time += ":";
  time += toRoman("xc", "x", "l", tensSeconds);
  time += toRoman("ix", "i", "v", onesSeconds);

  console.log(`time is ${time.toUpperCase()}`);
}

//call function every second
setInterval(function () {
  romanTime();
}, 1000);
