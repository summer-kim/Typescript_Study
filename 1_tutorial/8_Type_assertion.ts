interface Cafe {
  name: string;
  bean: string;
}

interface Restaurant {
  name: string;
  code: number;
}

function isCafe(): Cafe | Restaurant {
  return { name: 'starbucks', bean: 'specialty', code: 1102 };
}

const Starbucks = isCafe();
const BurgerKing = isCafe();
//Type assertion Manually
if ((Starbucks as Cafe).bean) {
  console.log((Starbucks as Cafe).bean);
}
if ((BurgerKing as Restaurant).code) {
  console.log((BurgerKing as Restaurant).code);
}

//Create Function of Type Guard Definition
//Return value must be boolean
function isRestaurant(target: Cafe | Restaurant): target is Restaurant {
  return (target as Restaurant).code !== undefined;
}
if (isRestaurant(Starbucks)) {
  console.log(Starbucks.code); // Gives API for Restaurant
} else {
  console.log(Starbucks.bean); // Gives API for Cafe
}
