var app = exports = module.exports = {};

app.fizzbuzz = function(input) {
  var result = '';
  if (input % 5 === 0 && input % 3 === 0) {
    result += "FizzBuzz";
    return result;
  } else if (input % 3 === 0) {
    result += "Fizz";
    return result;
  } else if (input % 5 === 0) {
    result += "Buzz";
    return result;
  } else {
    return "You probably didnt enter a number or the number isnt divisible by 3 or 5";
  }
};
