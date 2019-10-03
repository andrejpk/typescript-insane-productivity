// Typescript is a superset of Javascript

interface Person {
  LastName: string;
  FirstName: string;
  Birthdate?: Date;
  readonly id: number;
}

interface Pet {
  FirstName: string;
  Breed: string;
}

function hello(p: Person) {
  p.id++;
  return `Hello ${p.FirstName}`;
}

let me = {FirstName: 'Andrej', LastName: 'Kyselica', id: 42, City: 'Mason'};

let greeting = hello(me);

console.log(greeting);

interface NamedEntity {
  FirstName: string;
}

function greetEveryone<T extends NamedEntity>(list: T[]) {
  list.forEach(entity => {
    console.log(entity.FirstName);
  });
}

class User {
  id: number;
  FirstName: string;

  constructor(id: number, FirstName: string) {
    this.id = id;
    this.FirstName = FirstName;
  }
}

const days: ReadonlyArray<string> = ['Fri', 'Sat', 'Sun'];

days.push('Mon');

type StatusCode = 200 | 201 | 400 | 404 | 500;
let result: StatusCode = 200;

type EnabledState = 'on' | 'off' | 'auto';
let enabled: EnabledState = 'on';

type Result = {success: true; value: string} | {success: false; error: string};
const myRes: Result = {success: true, value: 'something'};

function processResult(res: Result) {
  if (res.success) {
    res;
  } else {
    res;
  }
}
