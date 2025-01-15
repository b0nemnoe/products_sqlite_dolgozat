import express from 'express';
import { initializeDatabase } from "./database.js";
import cors from 'cors';
import productsRoutes from "./routes/products.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", productsRoutes)


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message})
})

async function startServer() {
    await initializeDatabase();
    app.listen(3000);
}

startServer();
