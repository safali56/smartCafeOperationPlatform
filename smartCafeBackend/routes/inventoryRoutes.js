import express from "express";
import {
    addInventoryItem,
    getInventoryItem,
    updateInventoryQuantity,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", getInventoryItem);
router.post("/", addInventoryItem);
router.put("/:id",updateInventoryQuantity);


export default router;