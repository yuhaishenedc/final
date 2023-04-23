// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property without a get function on an Array-like object
---*/

var testResult = false;
var initialValue = 0;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (curVal === undefined);
  }
}

var obj = {
  0: 0,
  2: 2,
  length: 3
};

Object.defineProperty(obj, "1", {
  set: function() {},
  configurable: true
});

Array.prototype.reduce.call(obj, callbackfn, initialValue);

assert(testResult, 'testResult !== true');
