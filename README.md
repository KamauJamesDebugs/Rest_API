# REST API Project

## Description
This project is a REST API built with Node.js and Express.js. It provides endpoints for managing products, including creating, reading, updating, and deleting product data. The API is structured with a clear separation of concerns, using controllers, models, and routes.

## Features
- CRUD operations for products
- Database integration
- Modular architecture
- Built with Express.js for routing and middleware

## Project Structure
```
Backend/
├── server.js                # Entry point of the application
├── config/
│   └── db.js               # Database configuration
├── Controllers/
│   └── product.controller.js # Product controller logic
├── models/
│   └── Product.js          # Product schema/model
└── routes/
    └── Products.routes.js  # Product routes
```

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Rest API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
1. Set up your MongoDB database.
2. Update the database connection string in `Backend/config/db.js`.

## Usage
1. Start the server:
   ```bash
   node Backend/server.js
   ```
2. The API will be available at `http://localhost:3000`.

## API Endpoints
### Products
- **GET /products**: Retrieve all products
- **GET /products/:id**: Retrieve a product by ID
- **POST /products**: Create a new product
- **PUT /products/:id**: Update a product by ID
- **DELETE /products/:id**: Delete a product by ID

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)