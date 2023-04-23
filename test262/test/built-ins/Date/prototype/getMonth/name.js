// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.getmonth
description: >
  Date.prototype.getMonth.name is "getMonth".
info: |
  Date.prototype.getMonth ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Date.prototype.getMonth.name, "getMonth");

verifyNotEnumerable(Date.prototype.getMonth, "name");
verifyNotWritable(Date.prototype.getMonth, "name");
verifyConfigurable(Date.prototype.getMonth, "name");
