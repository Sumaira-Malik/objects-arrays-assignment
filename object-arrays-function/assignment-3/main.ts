// ---------------------------Assignment 3: Company Product Catalog-------------------------


// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

import chalk from "chalk";

type Product = {
    name: string;
    model: string;
    cost: number;
    quantity: number;
};

const inventory: Product[] = [];

const product1: Product = {
    name: "iphone",
    model: "15 Pro",
    cost: 286.900,
    quantity: 10,
};

const product2: Product = {
    name: "iphone",
    model: "12",
    cost: 12000,
    quantity: 10,
};

const product3: Product = {
    name: "iphone",
    model: "14 Plus",
    cost: 499.999,
    quantity: 15,
};

inventory.push(product1, product2, product3);

console.log("\n inventory \n",inventory);

console.log(chalk.blue(`\n Quantity of the third product: ${inventory[2].quantity} \n`));

// adding another product to the inventory 

const product4:Product = {
    name: "samsung",
    model: "A14",
    cost: 31.999,
    quantity: 12,
};
inventory.push(product4);

console.log("current inventory",inventory);
console.log(chalk.magenta(`\n Quantity of the fourth product: ${inventory[3].quantity} \n`));
inventory.forEach((product, index) => {
    console.log(chalk.yellow(`Product ${index + 1}: ${product.name}`)); 
});

