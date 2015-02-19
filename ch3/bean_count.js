var countChar = function (string, ch) {
  count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === ch) {
      count += 1;
    }
  }
  return count;
};

var countBs = function (string) {
  return countChar (string, "B")
};


console.log(countBs("BBBBB"));
