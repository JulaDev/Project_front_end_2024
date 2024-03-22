// itemlist.js
const BaseSQLModel = require("./baseSQLModel");
const connection = require("../db");

class ItemListModel extends BaseSQLModel {
    constructor() {
        super("product"); // Set table name to "item_list"
    }
    
    async defineProductItems() {
        try {
        const results = await this.findAll();
        if (results.length === 0) {
            await this.setProductItems();
        } else {
            // console.log("All productItems:", results);
        }
        return results;
        } catch (error) {
        console.error("Error retrieving product items:", error);
        throw error; // Propagate the error to the caller
        }
    }

    // async setProductItems(){}
    async setProductItems() {
        try {
            // await this.deleteAll();
            const item_list = [
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Potato Chips", 
                    product_description: "Delicious potato chips.", 
                    product_sales_count: 0, 
                    product_price: 2.99,
                    product_image: "potato_chips.jpg",
                    product_price_promotion: 1.59
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Popcorn", 
                    product_description: "Classic popcorn.", 
                    product_sales_count: 0, 
                    product_price: 1.99,
                    product_image: "popcorn.jpg",
                    product_price_promotion: 0.99
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Pretzels", 
                    product_description: "Crunchy pretzels.", 
                    product_sales_count: 0, 
                    product_price: 1.49,
                    product_image: "pretzels.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Granola Bars", 
                    product_description: "Healthy granola bars.", 
                    product_sales_count: 0, 
                    product_price: 3.49,
                    product_image: "granola_bars.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Trail Mix", 
                    product_description: "Energy-packed trail mix.", 
                    product_sales_count: 0, 
                    product_price: 4.99,
                    product_image: "trail_mix.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Cheese Crackers", 
                    product_description: "Cheesy crackers.", 
                    product_sales_count: 0, 
                    product_price: 2.79,
                    product_image: "cheese_crackers.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Cookies", 
                    product_description: "Classic cookies.", 
                    product_sales_count: 0, 
                    product_price: 4.99,
                    product_image: "cookies.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Brownies", 
                    product_description: "Rich chocolate brownies.", 
                    product_sales_count: 0, 
                    product_price: 3.49,
                    product_image: "brownies.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Ice Cream", 
                    product_description: "Refreshing ice cream.", 
                    product_sales_count: 0, 
                    product_price: 5.99,
                    product_image: "ice_cream.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Cupcakes", 
                    product_description: "Sweet cupcakes.", 
                    product_sales_count: 0, 
                    product_price: 2.29,
                    product_image: "cupcakes.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Cheesecake", 
                    product_description: "Creamy cheesecake slice.", 
                    product_sales_count: 0, 
                    product_price: 4.49,
                    product_image: "cheesecake.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Snack & Dessert",
                    product_name: "Fruit Tart", 
                    product_description: "Delicious fruit tart.", 
                    product_sales_count: 0, 
                    product_price: 3.99,
                    product_image: "fruit_tart.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Chicken Breast", 
                    product_description: "Fresh chicken breast.", 
                    product_sales_count: 0, 
                    product_price: 3.99,
                    product_image: "chicken_breast.jpg",
                    product_price_promotion: 0.99
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Ground Beef", 
                    product_description: "Quality ground beef.", 
                    product_sales_count: 0, 
                    product_price: 4.49,
                    product_image: "ground_beef.jpg",
                    product_price_promotion: 3.00
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Pork Chops", 
                    product_description: "Tender pork chops.", 
                    product_sales_count: 0, 
                    product_price: 5.99,
                    product_image: "pork_chops.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Bacon", 
                    product_description: "Crispy bacon.", 
                    product_sales_count: 0, 
                    product_price: 4.99,
                    product_image: "bacon.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Sausages", 
                    product_description: "Juicy sausages.", 
                    product_sales_count: 0, 
                    product_price: 6.49,
                    product_image: "sausages.jpg",
                    product_price_promotion: 3.25
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Turkey Breast", 
                    product_description: "Lean turkey breast.", 
                    product_sales_count: 0, 
                    product_price: 4.29,
                    product_image: "turkey_breast.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Salmon Fillet", 
                    product_description: "Fresh salmon fillet.", 
                    product_sales_count: 0, 
                    product_price: 10.99,
                    product_image: "salmon_fillet.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Shrimp", 
                    product_description: "Tasty shrimp.", 
                    product_sales_count: 0, 
                    product_price: 12.99,
                    product_image: "shrimp.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Tuna Steak", 
                    product_description: "Flavorful tuna steak.", 
                    product_sales_count: 0, 
                    product_price: 9.99,
                    product_image: "tuna_steak.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Cod Fillet", 
                    product_description: "Succulent cod fillet.", 
                    product_sales_count: 0, 
                    product_price: 8.99,
                    product_image: "cod_fillet.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Crab Legs", 
                    product_description: "Delicious crab legs.", 
                    product_sales_count: 0, 
                    product_price: 15.99,
                    product_image: "crab_legs.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Meat & Seafood",
                    product_name: "Lobster Tail", 
                    product_description: "Buttery lobster tail.", 
                    product_sales_count: 0, 
                    product_price: 14.99,
                    product_image: "lobster_tail.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Apples", 
                    product_description: "Crisp apples.", 
                    product_sales_count: 0, 
                    product_price: 1.99,
                    product_image: "apples.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Bananas", 
                    product_description: "Ripe bananas.", 
                    product_sales_count: 0, 
                    product_price: 0.59,
                    product_image: "bananas.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Oranges", 
                    product_description: "Juicy oranges.", 
                    product_sales_count: 0, 
                    product_price: 1.49,
                    product_image: "oranges.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Grapes", 
                    product_description: "Sweet grapes.", 
                    product_sales_count: 0, 
                    product_price: 2.99,
                    product_image: "grapes.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Strawberries", 
                    product_description: "Fresh strawberries.", 
                    product_sales_count: 0, 
                    product_price: 3.99,
                    product_image: "strawberries.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Blueberries", 
                    product_description: "Plump blueberries.", 
                    product_sales_count: 0, 
                    product_price: 4.49,
                    product_image: "blueberries.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Carrots", 
                    product_description: "Crunchy carrots.", 
                    product_sales_count: 0, 
                    product_price: 0.99,
                    product_image: "carrots.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Broccoli", 
                    product_description: "Nutritious broccoli.", 
                    product_sales_count: 0, 
                    product_price: 1.49,
                    product_image: "broccoli.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Spinach", 
                    product_description: "Fresh spinach.", 
                    product_sales_count: 0, 
                    product_price: 1.29,
                    product_image: "spinach.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "VFruit & Vegetable",
                    product_name: "Tomatoes", 
                    product_description: "Ripe tomatoes.", 
                    product_sales_count: 0, 
                    product_price: 1.79,
                    product_image: "tomatoes.jpg",
                    product_price_promotion: 0.79
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Bell Peppers", 
                    product_description: "Colorful bell peppers.", 
                    product_sales_count: 0, 
                    product_price: 2.49,
                    product_image: "bell_peppers.jpg",
                    product_price_promotion: null
                },
                { 
                    date: "2024-03-16",
                    product_category: "Fruit & Vegetable",
                    product_name: "Cucumbers", 
                    product_description: "Crisp cucumbers.", 
                    product_sales_count: 0, 
                    product_price: 0.79,
                    product_image: "cucumbers.jpg",
                    product_price_promotion: 0.05
                }
            ];            
        
        // Insert all items into the item_list table
        await this.bulkInsert(item_list);
        } catch(error) {
        console.error("Error setting product items:", error);
        }
    }

    async deleteAll() {
        try {
            console.log(`Deleting all rows from table: ${this.tableName}`);
            // Delete all rows from the product table
            await this.executeQuery(`DELETE FROM ${this.tableName}`);
            console.log(`Successfully deleted all rows from table: ${this.tableName}`);
        } catch(error) {
            console.error("Error deleting all product items:", error);
        }
    }

    async findByColumn(column, value) {
        try {
            const query = `SELECT * FROM ${this.tableName} WHERE ${column} = ?`;
            const results = await this.executeQuery(query, [value]);
            return results;
        } catch(error) {
            console.error(`Error fetching items by ${column}:`, error);
            throw error;
        }
    }


    async bulkInsert(items) {
        try {
        const query = `INSERT INTO ${this.tableName} (date, product_category, product_name, product_description, product_sales_count, product_price, product_image, product_price_promotion) VALUES ?`;
        const values = items.map(item => [item.date, item.product_category, item.product_name, item.product_description, item.product_sales_count, item.product_price, item.product_image, item.product_price_promotion]);
        await this.executeQuery(query, [values]);
        } catch(error) {
        console.error("Error bulk inserting product items:", error);
        throw error; // Propagate the error to the caller
        }
    }

    
    async getProductItems(startIndex, endIndex) {
        try {
            const query = `SELECT * FROM ${this.tableName} LIMIT ?, ?`;
            const params = [startIndex, endIndex - startIndex];
            const results = await this.executeQuery(query, params);
            return results;
        } catch (error) {
            console.error("Error fetching product items:", error);
            throw error;
        }
    }
    
    
    async getTotalProductItemsCount() {
        try {
            const count = await this.countAll();
            console.log(`Total Product Items Count: ${count}`);
            return count;
        } catch (error) {
            console.error("Error getting total product items count:", error);
            throw error;
        }
    }

    async countAll() {
        try {
            const [rows] = await connection.query(`SELECT COUNT(*) AS total FROM ${this.tableName}`);
            console.log(`Rows: ${JSON.stringify(rows)}`);
            return rows[0].total;
        } catch (error) {
            console.error("Error counting all items:", error);
            throw error;
        }
    }

    async findProductById(productId) {
        try {
            const query = `SELECT * FROM ${this.tableName} WHERE product_id = ?`;
            const [rows] = await connection.query(query, [productId]);
            if (rows.length > 0) {
                return rows[0]; // Return the first product found
            } else {
                throw new Error("Product not found");
            }
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw error;
        }
    }

}

const itemList = new ItemListModel();

module.exports = itemList;