import mongoose from "mongoose";


//Schema = class provided by mongoose to define structure of documents
//Its a concept and library class
//Blueprint for each inventory item
const inventoryItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    //enum helps to data stays clean by restricting to certain values
    
    category: {
      type: String,
      enum: ["dairy", "beans", "syrup", "other"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: String,
      required: true, // liters, grams, ml
    },
    lowStockThreshold: {
      type: Number,
      required: true,
    },
  },
   //createdAt → the date and time the item was first added
   //updatedAt → the date and time the item was last update
  { timestamps: true }
);

// Virtual field (computed, not stored)
inventoryItemSchema.virtual("isLowStock").get(function () {
  return this.quantity <= this.lowStockThreshold;
});

export default mongoose.model("InventoryItem", inventoryItemSchema);
