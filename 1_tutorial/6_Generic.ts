function returnType<T>(text: T): T {
  console.log(text);
  return text;
}

const carrotNum = returnType<number>(2);
//decide type at the moment value has declared

const carrot = returnType<string>('carrot');
//able to use any API of string
carrot.split('');

//How to apply Generic on interface
interface Vegetable<T> {
  name: string;
  color: T;
}
const eggPlant: Vegetable<string> = { name: 'eggPlant', color: 'purple' };

//Limit the type of generic
function logVegetable1<T>(value: T[]) {
  const length = value.length;
  //If you declare just "T"
  //unable to use .length api because type is implicit
  return value.filter((vege) => !vege);
}

//Extends generic to other type already declared
function logVegetable2<T extends Vegetable<number>>(value: T) {
  value.color = value.color + 1;
  return value;
}
logVegetable2({ name: 'cucumber', color: 33333 });

//Limit the type of generic - Keyof
function logVegetable3<T extends keyof Vegetable<number>>(value: T) {
  return value;
}
logVegetable3('color');
logVegetable3('name');
//💣💥logVegetable3(3)

//keyof
interface Country {
  Korea: string;
  Japan: string;
  France?: string;
  Australia?: string;
}
function logCountry1<T extends keyof Country>(countries: T[]) {
  countries.length;
  countries.join('');
}
logCountry1(['France', 'Japan']);
