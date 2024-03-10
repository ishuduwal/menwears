import express from 'express';
import { AddProduct, DeleteProduct, EditProduct, GetProduct } from '../controller/Product.js';

const router = express.Router();

router.get('/', GetProduct);
router.post('/', AddProduct);
router.put(':/id', EditProduct);
router.delete(':/id', DeleteProduct);
export default router;