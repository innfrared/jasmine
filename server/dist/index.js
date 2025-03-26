"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productRoutes_1 = __importDefault(require("./presentation/route/productRoutes"));
const upload_1 = __importDefault(require("./upload"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
const stripe = require('stripe')('sk_test_51R6oAbFLPEQ7E5VheRO5Mqj4pvLYWZac5lDH2OOIBsAXzM1BkrNI5K2Fn1z6RAFj9dY3m73DhFxRJeHdCfAzYFwh00p8TEeWoB', {
    apiVersion: '2025-02-24.acacia',
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/create-checkout-session', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartItems = req.body.items;
        console.log("Received items on server:", req.body.items);
        const line_items = cartItems.map((item) => ({
            price_data: {
                currency: 'amd',
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(Number(item.price.replace(/[^\d.-]/g, '')) * 100),
            },
            quantity: item.quantity,
        }));
        const session = yield stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items,
            mode: 'payment',
            payment_method_types: ['card'],
            return_url: 'https://digital-city-bice.vercel.app/cart',
        });
        res.send({ clientSecret: session.client_secret });
    }
    catch (error) {
        console.error('❌ Stripe Error:', error);
        res.status(500).send({ error: error || 'Unknown error' });
    }
}));
app.use((req, res, next) => {
    req.url = decodeURIComponent(req.url);
    next();
});
app.use('/api/products', productRoutes_1.default);
app.use("/api", upload_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Using DB URL:", process.env.DATABASE_URL); // ✅ Debug print
});
