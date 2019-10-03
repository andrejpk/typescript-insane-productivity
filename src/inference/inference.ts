const a = 'hello';

const b = [1, 2, 3];

const c = [4, 5, null];

const d = ['a', null];

const e = [...b, ...d];

// b.push('x');

function sum(x: number, y: number) {
  return x + y;
}

function splitName(nameString: string) {
  return nameString.split(',');
}

function parse(nameString: string) {
  const n = splitName(nameString);
  return {
    FirstName: n[1],
    LastName: n[0],
  };
}

function coffee(time: Date) {
  if (time.getHours() < 12) {
    return "Grande!"
  }
  return null;
}

function measureName<T extends {LastName: string}>(inName: T) {
  return { NameLength: inName.LastName.length, ...inName}
}

const myName = {FirstName: 'Andrej', LastName: 'Kyselica'}
const myMeasuredName = measureName(myName);

function measureName2(name: string | null) {
  name;
  if (name) {
    name;
    return name.length;
  }
  return 0;
}
