import express from 'express';
const app = express();

//
import productRouter from './routes/productRoutes.js';
import cors from 'cors';
const PORT = 3000;

// mongodb connection
import dotenv from 'dotenv';
import connectDB from './config/db.js';
connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/api/v1/products', productRouter);


// app.METHODS(PATH, Handler)


app.get('/', (req, res) => {
    res.send(" Hello World!");
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});