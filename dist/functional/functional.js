"use strict";
var checkLength = function (a) { return a.length; };
var friends = ['Tom', 'Richard', 'Harry', 'Bob', 'Bruce'];
var nameLengths = friends.map(checkLength);
var shortNameFilter = function (name) { return name.length < 5; };
var shortNames = friends.filter(shortNameFilter);
var startsWithFilterGenerator = function (startingLetter) { return function (name) {
    return name[0] === startingLetter;
}; };
var startsWithBFilter = startsWithFilterGenerator('B');
var bNames = friends.filter(startsWithBFilter);
console.log('bNames', bNames);
function and(predicates) {
    return function (e) { return predicates.every(function (p) { return p(e); }); };
}
var shortBNames = friends.filter(and([shortNameFilter, startsWithBFilter]));
console.log('shortBNames', shortBNames);
