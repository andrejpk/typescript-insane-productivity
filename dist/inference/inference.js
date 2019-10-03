"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = 'hello';
var b = [1, 2, 3];
var c = [4, 5, null];
var d = ['a', null];
var e = b.concat(d);
// b.push('x');
function sum(x, y) {
    return x + y;
}
function splitName(nameString) {
    return nameString.split(',');
}
function parse(nameString) {
    var n = splitName(nameString);
    return {
        FirstName: n[1],
        LastName: n[0],
    };
}
function coffee(time) {
    if (time.getHours() < 12) {
        return "Grande!";
    }
    return null;
}
function measureName(inName) {
    return __assign({ NameLength: inName.LastName.length }, inName);
}
var myName = { FirstName: 'Andrej', LastName: 'Kyselica' };
var myMeasuredName = measureName(myName);
function measureName2(name) {
    name;
    if (name) {
        name;
        return name.length;
    }
    return 0;
}
