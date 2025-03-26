import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

import productRoutes from './presentation/route/productRoutes';
import uploadRoutes from './upload';

const app = express();
const PORT = process.env.PORT || 5001;

const stripe = require('stripe')('sk_test_51R6oAbFLPEQ7E5VheRO5Mqj4pvLYWZac5lDH2OOIBsAXzM1BkrNI5K2Fn1z6RAFj9dY3m73DhFxRJeHdCfAzYFwh00p8TEeWoB', {
    apiVersion: '2025-02-24.acacia',
});

app.use(cors());
app.use(express.json());
app.post('/create-checkout-session', async (req, res) => {
    try {
        const cartItems = req.body.items;
        console.log("Received items on server:", req.body.items);

        const line_items = cartItems.map((item: any) => ({
            price_data: {
                currency: 'amd',
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(Number(item.price.replace(/[^\d.-]/g, '')) * 100),
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items,
            mode: 'payment',
            payment_method_types: ['card'],
            return_url: 'https://digital-city-bice.vercel.app/cart',
        });

        res.send({ clientSecret: session.client_secret });
    } catch (error) {
        console.error('❌ Stripe Error:', error);
        res.status(500).send({ error: error || 'Unknown error' });
    }
});
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
