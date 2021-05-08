import Store from "./Store";
import inventory from "./inventory";

const skiShop = new Store('Steep and Deep', inventory);

const searchItem = 'powder skis';
const results = skiShop.find(searchItem);

console.log( results );
