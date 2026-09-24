import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  {
    name: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Mechanical Gaming Keyboard",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Smart Watch Pro",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "4K Ultra HD Camera",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Minimalist Backpack",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Wireless Gaming Mouse",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60",
  },
  // {
  //     name: "Smart Home Speaker",
  //     price: 159.99,
  //     image:
  //     "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop&q=60",
  // },
  {
    name: "LED Gaming Monitor",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Airbuds",
    price: 55.0,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
  },

  {
    name: "Premium Keyboard",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtleWJvYXJkfGVufDB8fDB8fHww",
  },
  {
    name: "Macbook",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "ROG Laptop",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1771014846919-3a1cf73aeea1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "MSI Laptop",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1617294864710-bb97f05457f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fHww",
  },
];

async function seedDatabase() {
  try {
    // first, clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // failure code
  }
}

// If this function call then automatically all products will be inserted in database
// node backend/seeds/products.js
seedDatabase();
