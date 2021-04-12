interface Dog<T> {
  species: string;
  age: number;
  condition: T;
}
interface DogInDoor<T> extends Dog<T> {
  owner: T;
}

const myDog: DogInDoor<number> = {
  species: 'Maltese',
  age: 10,
  condition: 1004,
  owner: 0101234567,
};
