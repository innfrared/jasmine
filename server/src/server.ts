import express, { Request, Response } from 'express';
import { TrackController } from './presentation/controller/similarTracksController';
import authRoutes from "./presentation/route/authRoutes";
import userRoutes from "./presentation/route/userRoutes";
import dotenv from 'dotenv';
import cors from 'cors';
import authMiddleware from "./middleware/authMiddleware";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.get('/api/similar-tracks', TrackController.fetchSimilarTracks);

app.get('/', (req: Request, res: Response) => {
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>API Link</title>
        </head>
        <body>
            <h1>API Link</h1>
            <div>
                <a href="/api/similar-tracks?search=believe" target="_blank">http://localhost:3000/api/similar-tracks?search=believe</a>
            </div>
        </body>
        </html>
    `;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
