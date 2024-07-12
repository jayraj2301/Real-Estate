import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express()
app.use(cors({credentials:true, origin: 'http://localhost:5173'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//routers

import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';

app.use("/api/v1/user",userRouter)
app.use("/api/v1/property",propertyRouter)

export {app}