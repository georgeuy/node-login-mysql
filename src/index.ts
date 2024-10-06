import path from 'path';
import express, {type NextFunction, type Request, type Response } from "express";
import { engine } from "express-handlebars";
import myconnection from 'express-myconnection';
import mysql from 'mysql';
import session from "express-session";

const app = express();
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('view engine', 'hbs');

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json());

// rutas
import mainRouter from './routes/main-routes';
app.use(mainRouter);

// errores
app.use((err:any, req:Request, res:Response, next:NextFunction)=>{
    let error = 'Error desconocido'
    if('message' in err)
        error = err.message;
    else
        console.log(err);
        
    res.status(500).send(error);
})

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, ()=>console.log(`Server running at http://127.0.0.1:${PORT}`))