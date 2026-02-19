const express = require('express');
const router = express.Router();
const { getAllItems, addItem, deleteItem } = require('../controllers/inventoryController');

// GET all items
router.get("/", getAllItems);

// POST create new item
router.post("/", addItem);

// DELETE item by id
router.delete("/:id", deleteItem);

module.exports = router;

