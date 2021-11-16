exports.c2f = function (c) {
    return c * 9 / 5 + 32;
}

var f2c = exports.f2c = function (f) {
    return (f - 32) * 5 / 9;
}

var c2k = exports.c2k = function (c) {
    return c + 273.15;
}

var k2c = exports.k2c = function (k) {
    return k - 273.15;
}

exports.f2k = function (f) {
    var c = f2c(f);
    return c2k(c);
}

exports.k2f = function (k) {
    var c = k2c(k);
    return c2f(c);
}
// //you can write the above modules as follow if you want
// module.exports = {
//     c2f: function() {},
//     f2c: function() {},
//     c2k: function() {},
//     k2c: function() {},
//     k2f: function() {},
//     f2k: function() {},
// };


