import {Router,  type NextFunction, type Request, type Response } from "express";

const router = Router();

router.get('/:id', (req:Request, res:Response)=>{
    
    //throw new Error('Error al conectarse a la bd');
    
    res.send("Hola mundo con parametros");
})

router.get('/', (req:Request, res:Response)=>{
    res.render('index');
})

router.get('*', (_, res:Response)=>{
    res.status(404).send("Recurso no encontrado");
})

export default router;