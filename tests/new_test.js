

/*
function test_arrow_function()
{
    //"use strict";

    var o1 = { f() { return this; } };
    var o2 = { f() {
        return (() => super.f())();
    } };
    o2.__proto__ = o1;

    console.log(o2.f()===o2);
}

test_arrow_function();
*/

/*
(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
  }((function () { 'use strict';

})));
*/
function assert(actual, expected, message) {
    if (arguments.length == 1)
        expected = true;

    if (actual === expected)
        return;

    if (actual !== null && expected !== null
    &&  typeof actual == 'object' && typeof expected == 'object'
    &&  actual.toString() === expected.toString())
        return;

    throw Error("assertion failed: got |" + actual + "|" +
                ", expected |" + expected + "|" +
                (message ? " (" + message + ")" : ""));
}


function test_closure2()
{
    var expr_func = function myfunc1(n) {
        function myfunc2(n) {
            return myfunc1(n - 1);
        }
        if (n == 0)
            return 0;
        else
            return myfunc2(n);
    };
    var r;
    r = expr_func(1);
    assert(r, 0, "expr_func");
}

test_closure2();