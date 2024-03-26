import express from 'express';
import { AddProduct, DeleteProduct,  EditProduct,  GetProduct } from '../controller/Product.js';

const router = express.Router();

router.get('/', GetProduct);
router.post('/', AddProduct);
router.delete('/:id', DeleteProduct);
router.put('/:id', EditProduct);
export default router;