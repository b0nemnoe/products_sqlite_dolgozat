import express from 'express';
import { dbQuery, dbRun } from '../database.js';

const router = express.Router();

router.get('/', async (req,res,next) => {
    try {
        const products = await dbQuery("SELECT * FROM products")
        res.status(200).json(products)
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req,res,next) => {
    try {
        const result = await dbRun("INSERT INTO products (name, brand, description, price) VALUES(?,?,?,?)",[req.body.name, req.body.brand, req.body.description, req.body.price]);
        res.status(201).json({ id: result.LastId, ...req.body});
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req,res,next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id = ?", [req.params.id]);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req,res,next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id = ?", [req.params.id]);
        if (!product) return res.status(404).json({ message: "PRODUCT NOT FOUND"});
        res.status(201).json({ id: req.id, ...req.body})
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req,res,next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id = ?", [req.params.id]);
        if (!product) return res.status(404).json({ message: "PRODUCT NOT FOUND"});
        await dbRun("DELETE FROM products WHERE id = ? ", [req.params.id])
        res.status(204).json({ message: "PRODUCT DELETE WAS SUCCESFULL"})
    } catch (error) {
        next(error);
    }
});

export default router;
