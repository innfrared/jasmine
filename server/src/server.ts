import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import productRoutes from './presentation/route/productRoutes';
import uploadRoutes from './upload';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    req.url = decodeURIComponent(req.url);
    next();
});
app.use('/api/products', productRoutes);
app.use("/api", uploadRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Using DB URL:", process.env.DATABASE_URL); // ✅ Debug print
});
