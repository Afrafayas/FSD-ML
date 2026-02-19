const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0              // ✅ ADDED: Prevent negative quantity
    },
    price: {                // ✅ ADDED: price field (was missing in old model)
        type: Number,
        required: true,
        min: 0
    }
},
{ timestamps: true } // ✅ ADDED: Automatically manage createdAt and updatedAt
);

const Item = mongoose.model('Item', itemSchema);


// Read all items
const getAllitemModel = async () => {
    return await Item.find();
};

// Create item
const addItemModel = async (itemData) => {
    const newItem = new Item(itemData);
    return await newItem.save();
};

// Delete item
const deleteItemModel = async (id) => {
    return await Item.findByIdAndDelete(id);
};

module.exports = {      
    getAllitemModel,    
    addItemModel,
    deleteItemModel 
};
