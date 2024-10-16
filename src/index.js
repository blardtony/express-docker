import express from 'express';
import { tryConnectDatabase } from './config/database.js';

const app = express();

app.listen(3000, () => {
    tryConnectDatabase();
    console.log("Server connected")
});
