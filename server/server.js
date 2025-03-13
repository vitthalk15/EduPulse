import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

// Initialize Express application
const app = express();

// connect to database
await connectDB()

// Apply middlewares
app.use(cors());

// Define routes
app.get('/', (req, res) => res.send('API working'));
app.post('/clerk',express.json(),clerkWebhooks)

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});