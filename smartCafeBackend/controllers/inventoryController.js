import InventoryItem from "../models/inventoryItem.js";

// Get all inventory items
export const getInventory = async (req, res) => {
  const items = await InventoryItem.find();
  res.json(items);
};

// Add new inventory item
export const addInventoryItem = async (req, res) => {
  const item = await InventoryItem.create(req.body);
  res.status(201).json(item);
};

// Update quantity
export const updateInventoryQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const item = await InventoryItem.findByIdAndUpdate(
    id,
    { quantity },
    { new: true }
  );

  res.json(item);
};
