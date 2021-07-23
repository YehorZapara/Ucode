exports.Ingestion = class {
  constructor(meal_type = ['breakfast', 'lunch', 'dinner'], id, products, day_of_diet) {
    this.id = id
    this.day_of_diet = day_of_diet
    this.meal_type = meal_type
    this.products = products = []
  }
  setProduct(prod) {
    this.products.push(prod)
  }

  getProductInfo(arr) {
    let res = ''
    this.products.forEach((item) => {
      if (item.name == arr) {
        res = item
      }
    });
    return res
  }

  getFromFridge(arr) {
    if (this.getProductInfo(arr).kcal > 200) {
      throw new Error(`Too many calories in ${arr} for ${this.meal_type}`)
    }
  }
}



/*
  Task name: Try, catch
*/

const { Product } = require("./product");
const { Ingestion } = require("./ingestion");
const productNames = [
  'Nutella',
  'Chicken',
  'Coca-Cola',
  'Biscuit',
  'Brocolli',
  'Tomatoes',
  'Apple',
  'Potato',
  'Pizza',
  'Beer'
];

const randomInt = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
}

const stock = new Ingestion('breakfast', 1);

productNames.forEach(name => {
  stock.setProduct(new Product(name, randomInt(40, 500)))
})

productNames.forEach(productName => {
  console.log(`***\nGetting ${productName} that has`,
    `${stock.getProductInfo(productName).kcal} calories.`)
  try {
    stock.getFromFridge(productName);
    console.log(`You're doing great, ${productName} is good!`)
  } catch (error) {
    console.log(`Caught exception: ${error.message}!`,
      `Throw ${productName} away!`)
  }
})
