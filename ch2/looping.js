var app = exports = module.exports = {};

app.triangle = function(calls) {
  var str = '';
  for (var k = 1; k <= calls; k++) {
    for (var i = 0; i < k; i++) {
      str += '#';
    }
    str += '\n';
  }
  return str;
};
