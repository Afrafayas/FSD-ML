const express = require('express');
const app = express();
const port = 3000;

const inventoryRoutes = require('./routes/inventoryRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/inventoryDB')
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Middleware to parse JSON
app.use(express.json());

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send("Inventory API is Running");
});

app.get('/health', (req, res) => {
  res.json({ status: "Server is healthy" });
});

// Inventory routes
app.use('/inventory', inventoryRoutes);

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  