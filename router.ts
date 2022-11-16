import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './src/useCases/categories/CreateCategory';
import { listCategories } from './src/useCases/categories/listCategories';
import { createProduct } from './src/useCases/products/createProducts';
import { listProducts } from './src/useCases/products/listProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create products
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

//Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
