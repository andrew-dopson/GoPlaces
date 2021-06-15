import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import { dbUri } from './config';


const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect(dbUri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true 
});

// Show successful connection to MongoDB
mongoose.connection.on('connected', () => {
    console.log('Connected to Database');
})

// Show error with Database connection
mongoose.connection.on('error', (err) => {
    console.log('Database Error: ' + err);
})

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

export default app;