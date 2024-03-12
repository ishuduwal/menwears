import Product from "../model/Product.js";
import mongoose from "mongoose";

export const GetProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const AddProduct = async (req, res) => {
    const { title, description, price } = req.body
    try {
        let product = await Product.findOne({ title: title })
        if (product) { res.status(200).json({ message: "Product is already added" }) }
        else {
            const newProduct = new Product({
                title, description, price
            })
            await newProduct.save()
            res.status(201).json({message:"New product added"})
        }
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const EditProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Products id is missing' });
        }
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { title, description, price },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({message:'Product not found'})
        }
        res.status(200).json({ message: 'Product updated sucessfully', product: updatedProduct });
    } catch (error) {
        console.log('Error while updating product:', error);
        res.status(500).json({message:'Error updating product', error: error.message})
    }
}

export const DeleteProduct = async (req, res) => {
    try {
        const  {id}  = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Product Id is missing' });
        }

        if (!await Product.find({ _id: id })) return res.status(404).json("Product not found!");
        
        await Product.findOneAndDelete({ _id: id })
        
        res.status(200).json({message:'Product deleted sucessfully'})
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({message:'Error deleting product', error: error.message})
    }
}