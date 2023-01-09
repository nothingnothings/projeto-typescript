// let age: number;

// age = 30;

// console.log(age);



// const express = require('express');

// const bodyParser = require('body-parser');




import express from 'express';


import { Request, Response, NextFunction } from 'express'

import bodyParser from 'body-parser';


import routes from  './routes/routes'


 
const app = express();



const body = bodyParser.json({strict: true});






app.use(body);


// app.use(routes);



app.use('/todos', routes); 




app.use( ///error handling middleware (fallback)..

    (error: Error, req: Request, res: Response, next: NextFunction) => {   


        res.status(400).json({
            message: 'Whoops, something went wrong!'
        })
    }
 
)


app.listen(3000);


