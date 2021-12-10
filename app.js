import express from 'express';
import bcrypt from 'bcrypt';
import connectDB from './db/userDB.js';
import web from './routes/web.js';
const db_URL = 'mongodb://localhost:27017'
const app = express();

app.set('view engine', 'ejs');

connectDB(db_URL);

app.use(express.urlencoded({extended: 'true'}))

app.use('/', web);

app.listen(3000, ()=>{
    console.log(`server running on : 3000 `);
});