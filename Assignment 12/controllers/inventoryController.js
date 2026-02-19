const { 
    getAllitemModel, 
    addItemModel, 
    deleteItemModel 
} = require("../models/inventoryModels");   // make sure file name matches


// Home route
const getItem = (req, res) => {
    res.send('Inventory Home Page');
};



const getAllItems = async (req, res) => {
    try {
        const items = await getAllitemModel();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
};



const addItem = async (req, res) => {
    try {
        const { name, quantity, price } = req.body;

        const created = await addItemModel({
            name,
            quantity,
            price
        });

        res.status(201).json({ message: "Item added", created });

    } catch (error) {
        res.status(500).json({ message: "Error adding item", error });
    }
};



const deleteItem = async (req, res) => {
    try {
        const deleted = await deleteItemModel(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json({ message: "Item deleted", deleted });

    } catch (error) {
        res.status(500).json({ message: "Error deleting item", error });
    }
};


module.exports = { 
    getItem, 
    getAllItems, 
    addItem, 
    deleteItem 
};
