"use strict";
// Typescript is a superset of Javascript
function hello(p) {
    p.id++;
    return "Hello " + p.FirstName;
}
var me = { FirstName: 'Andrej', LastName: 'Kyselica', id: 42, City: 'Mason' };
var greeting = hello(me);
console.log(greeting);
function greetEveryone(list) {
    list.forEach(function (entity) {
        console.log(entity.FirstName);
    });
}
var User = /** @class */ (function () {
    function User(id, FirstName) {
        this.id = id;
        this.FirstName = FirstName;
    }
    return User;
}());
var days = ['Fri', 'Sat', 'Sun'];
days.push('Mon');
var result = 200;
var enabled = 'on';
var myRes = { success: true, value: 'something' };
function processResult(res) {
    if (res.success) {
        res;
    }
    else {
        res;
    }
}
