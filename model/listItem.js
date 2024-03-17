// // listItem.js
// const BaseSQLModel = require("./baseSQLModel");

// class ProductItemsModel extends BaseSQLModel {
//   constructor(tableName) {
//     super(tableName); 
//   }
  
//   async defineProductItems() {
//     const results = await this.findAll()
//       .then((results) => {
//         if (results[0] == undefined) {
//           this.setProductItems();
//         } else {
//           console.log("All productItems:", results);
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving users:", error);
//       });

//     return results;
//   }

//   async setProductItems() {
//     try {
//       const snack_items = [
//         { name: "Potato Chips", price: "2.99" },
//         { name: "Popcorn", price: "1.99" },
//         { name: "Pretzels", price: "1.49" },
//         { name: "Granola Bars", price: "3.49" },
//         { name: "Trail Mix", price: "4.99" },
//         { name: "Cheese Crackers", price: "2.79" }
//       ];

//       const dessert_items = [
//         { name: "Chocolate Chip Cookies", price: "4.99" },
//         { name: "Brownies", price: "3.49" },
//         { name: "Ice Cream Pint", price: "5.99" },
//         { name: "Cupcakes", price: "2.29" },
//         { name: "Cheesecake Slice", price: "4.49" },
//         { name: "Fruit Tart", price: "3.99" }
//       ];

//       const meat_items = [
//         { name: "Chicken Breast", price: "3.99" },
//         { name: "Ground Beef", price: "4.49" },
//         { name: "Pork Chops", price: "5.99" },
//         { name: "Bacon", price: "4.99" },
//         { name: "Sausages", price: "6.49" },
//         { name: "Turkey Breast", price: "4.29" }
//       ];

//       const seafood_items = [
//         { name: "Salmon Fillet", price: "10.99" },
//         { name: "Shrimp", price: "12.99" },
//         { name: "Tuna Steak", price: "9.99" },
//         { name: "Cod Fillet", price: "8.99" },
//         { name: "Crab Legs", price: "15.99" },
//         { name: "Lobster Tail", price: "14.99" }
//       ];

//       const fruit_items = [
//         { name: "Apples", price: "1.99" },
//         { name: "Bananas", price: "0.59" },
//         { name: "Oranges", price: "1.49" },
//         { name: "Grapes", price: "2.99" },
//         { name: "Strawberries", price: "3.99" },
//         { name: "Blueberries", price: "4.49" }
//       ];

//       const vegetable_items = [
//         { name: "Carrots", price: "0.99" },
//         { name: "Broccoli", price: "1.49" },
//         { name: "Spinach", price: "1.29" },
//         { name: "Tomatoes", price: "1.79" },
//         { name: "Bell Peppers", price: "2.49" },
//         { name: "Cucumbers", price: "0.79" }
//       ];
      
//       // Insert all items into their respective tables
//       await this.bulkInsert(snack_items);
//       await this.bulkInsert(dessert_items);
//       await this.bulkInsert(meat_items);
//       await this.bulkInsert(seafood_items);
//       await this.bulkInsert(fruit_items);
//       await this.bulkInsert(vegetable_items);
//     } catch(error) {
//       console.error("Error setting product items:", error);
//     }
//   }

//   async getProductItemsName() {
//     const results = await this.findByColumn('name');
//     return results;
//   }

//   async getProductItemsPrice() {
//     const results = await this.findByColumn('price');
//     return results;
//   }
  
//   async getProductItems() {
//     const results = await this.findAll();
//     return results;
//   }

//   async bulkInsert(items) {
//     const query = `INSERT INTO ${this.tableName} (name, price) VALUES ?`;
//     const values = items.map(item => [item.name, item.price]);
//     await this.executeQuery(query, [values]);
//   }
// }

// const snackItems = new ProductItemsModel("snack_items");
// const dessertItems = new ProductItemsModel("dessert_items");
// const meatItems = new ProductItemsModel("meat_items");
// const seafoodItems = new ProductItemsModel("seafood_items");
// const fruitItems = new ProductItemsModel("fruit_items");
// const vegetableItems = new ProductItemsModel("vegetable_items");


// module.exports = { snackItems, dessertItems, meatItems, seafoodItems, fruitItems, vegetableItems };