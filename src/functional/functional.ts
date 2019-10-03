const checkLength = (a: string) => a.length;

const friends = ['Tom', 'Richard', 'Harry', 'Bob', 'Bruce'];

const nameLengths = friends.map(checkLength);

const shortNameFilter = (name: string) => name.length < 5;

const shortNames = friends.filter(shortNameFilter);

const startsWithFilterGenerator = (startingLetter: string) => (name: string) =>
  name[0] === startingLetter;

const startsWithBFilter = startsWithFilterGenerator('B');

const bNames = friends.filter(startsWithBFilter);
console.log('bNames', bNames);

type Predicate<T> = (e: T) => boolean;

function and<T>(predicates: Predicate<T>[]): Predicate<T> {
  return e => predicates.every(p => p(e));
}

const shortBNames = friends.filter(and([shortNameFilter, startsWithBFilter]));
console.log('shortBNames', shortBNames);
