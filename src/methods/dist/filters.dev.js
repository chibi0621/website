"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currency = currency;
exports.date = date;

function currency(num) {
  var n = parseInt(num, 10);
  return "".concat(n.toFixed(0).replace(/./g, function (c, i, a) {
    return i && c !== '.' && (a.length - i) % 3 === 0 ? ", ".concat(c).replace(/\s/g, '') : c;
  }));
}

function date(time) {
  var localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}