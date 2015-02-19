var min = function(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else if (a === b) {
    return "both are equal";
  } else {
    return "one is not a number"
  }
};

console.log(min(4, 6));
console.log(min(8, 6));
console.log(min(3, 3));
console.log(min("1", 1));
