import express from 'express';
const app = express();
const PORT = 3000;
//
import productRouter from './routes/productRoutes.js';


// mongodb connection
import dotenv from 'dotenv';
import connectDB from './config/db.js';
connectDB();




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