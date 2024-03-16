// itemlist.js
const BaseSQLModel = require("./baseSQLModel");

class ItemListModel extends BaseSQLModel {
  constructor() {
    super("item_list"); // Set table name to "item_list"
  }
  
  async defineProductItems() {
    try {
      const results = await this.findAll();
      if (results.length === 0) {
        await this.setProductItems();
      } else {
        console.log("All productItems:", results);
      }
      return results;
    } catch (error) {
      console.error("Error retrieving product items:", error);
      throw error; // Propagate the error to the caller
    }
  }

  async setProductItems() {
    try {
      const item_list = [
        { category: "Snack", name: "Potato Chips", detail: "Delicious potato chips.", price: 2.99 },
        { category: "Snack", name: "Popcorn", detail: "Classic popcorn.", price: 1.99 },
        { category: "Snack", name: "Pretzels", detail: "Crunchy pretzels.", price: 1.49 },
        { category: "Snack", name: "Granola Bars", detail: "Healthy granola bars.", price: 3.49 },
        { category: "Snack", name: "Trail Mix", detail: "Energy-packed trail mix.", price: 4.99 },
        { category: "Snack", name: "Cheese Crackers", detail: "Cheesy crackers.", price: 2.79 },
        { category: "Dessert", name: "Cookies", detail: "Classic cookies.", price: 4.99 },
        { category: "Dessert", name: "Brownies", detail: "Rich chocolate brownies.", price: 3.49 },
        { category: "Dessert", name: "Ice Cream ", detail: "Refreshing ice cream.", price: 5.99 },
        { category: "Dessert", name: "Cupcakes", detail: "Sweet cupcakes.", price: 2.29 },
        { category: "Dessert", name: "Cheesecake", detail: "Creamy cheesecake slice.", price: 4.49 },
        { category: "Dessert", name: "Fruit Tart", detail: "Delicious fruit tart.", price: 3.99 },
        { category: "Meat", name: "Chicken Breast", detail: "Fresh chicken breast.", price: 3.99 },
        { category: "Meat", name: "Ground Beef", detail: "Quality ground beef.", price: 4.49 },
        { category: "Meat", name: "Pork Chops", detail: "Tender pork chops.", price: 5.99 },
        { category: "Meat", name: "Bacon", detail: "Crispy bacon.", price: 4.99 },
        { category: "Meat", name: "Sausages", detail: "Juicy sausages.", price: 6.49 },
        { category: "Meat", name: "Turkey Breast", detail: "Lean turkey breast.", price: 4.29 },
        { category: "Seafood", name: "Salmon Fillet", detail: "Fresh salmon fillet.", price: 10.99 },
        { category: "Seafood", name: "Shrimp", detail: "Tasty shrimp.", price: 12.99 },
        { category: "Seafood", name: "Tuna Steak", detail: "Flavorful tuna steak.", price: 9.99 },
        { category: "Seafood", name: "Cod Fillet", detail: "Succulent cod fillet.", price: 8.99 },
        { category: "Seafood", name: "Crab Legs", detail: "Delicious crab legs.", price: 15.99 },
        { category: "Seafood", name: "Lobster Tail", detail: "Buttery lobster tail.", price: 14.99 },
        { category: "Fruit", name: "Apples", detail: "Crisp apples.", price: 1.99 },
        { category: "Fruit", name: "Bananas", detail: "Ripe bananas.", price: 0.59 },
        { category: "Fruit", name: "Oranges", detail: "Juicy oranges.", price: 1.49 },
        { category: "Fruit", name: "Grapes", detail: "Sweet grapes.", price: 2.99 },
        { category: "Fruit", name: "Strawberries", detail: "Fresh strawberries.", price: 3.99 },
        { category: "Fruit", name: "Blueberries", detail: "Plump blueberries.", price: 4.49 },
        { category: "Vegetable", name: "Carrots", detail: "Crunchy carrots.", price: 0.99 },
        { category: "Vegetable", name: "Broccoli", detail: "Nutritious broccoli.", price: 1.49 },
        { category: "Vegetable", name: "Spinach", detail: "Fresh spinach.", price: 1.29 },
        { category: "Vegetable", name: "Tomatoes", detail: "Ripe tomatoes.", price: 1.79 },
        { category: "Vegetable", name: "Bell Peppers", detail: "Colorful bell peppers.", price: 2.49 },
        { category: "Vegetable", name: "Cucumbers", detail: "Crisp cucumbers.", price: 0.79 },
      ];
      
      // Insert all items into the item_list table
      await this.bulkInsert(item_list);
    } catch(error) {
      console.error("Error setting product items:", error);
    }
  }

  async getProductItemsCategory() {
    const results = await this.findByColumn('category');
    return results;
  }
  
    async getProductItemsName() {
    const results = await this.findByColumn('name');
    return results;
  }

  async getProductItemsDetail() {
    const results = await this.findByColumn('detail');
    return results;
  }
  
  async getProductItemsPrice() {
    const results = await this.findByColumn('price');
    return results;
  }

  async getProductItems() {
    try {
      const results = await this.findAll();
      return results;
    } catch(error) {
      console.error("Error retrieving product items:", error);
      throw error; // Propagate the error to the caller
    }
  }

  async findByColumn(column, value) {
    try {
        const query = `SELECT name, price FROM ${this.tableName} WHERE ${column} = ?`;
        const results = await this.executeQuery(query, [value]);
        return results;
    } catch(error) {
        console.error(`Error fetching items by ${column}:`, error);
        throw error;
    }
}


  async bulkInsert(items) {
    try {
      const query = `INSERT INTO ${this.tableName} (category, name, detail, price) VALUES ?`;
      const values = items.map(item => [item.category, item.name, item.detail, item.price]);
      await this.executeQuery(query, [values]);
    } catch(error) {
      console.error("Error bulk inserting product items:", error);
      throw error; // Propagate the error to the caller
    }
  }
}

const itemList = new ItemListModel();

module.exports = itemList;