import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { AddProduct, DeleteProduct, EditProduct, GetProduct } from '../controller/Product.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join(__dirname, '../../client/src/assets/images/uploadedImage');
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/', GetProduct);
router.post('/', AddProduct);
router.post('/upload', upload.single('product'));
router.delete('/:id', DeleteProduct);
router.put('/:id', EditProduct);

export default router;