var deepEqual = function(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  var obj1Prop = 0;
  var obj2Prop = 0;

  for (var prop in obj1) {
    obj1Prop += 1;
  }

  for (var prop in obj2) {
    obj2Prop += 1;
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop])) {
      return false;
    }
  }
  return obj1Prop === obj2Prop;
};


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
