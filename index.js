import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

import userRouter from './routers/userRouter.js';
import linkRouter from './routers/linkRouter.js';
import connectDB from './database.js';
import redirectRouter from './routers/redirect.js';
import trackingRouter from './routers/trackingRouter.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/links', linkRouter);
app.use('/redirect',redirectRouter)
app.use('/track',trackingRouter)
const port = 3300;

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});


