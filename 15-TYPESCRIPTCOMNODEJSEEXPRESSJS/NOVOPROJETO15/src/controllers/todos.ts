
// import { Request, Response, NextFunction } from 'express'

import { RequestHandler } from 'express'; ///SHORTCUT ÚTIL PARA O CÓDIGO DE CIMA (não precisamos escrever essa lenga-lenga de types em CADA CONTROLLER DE NOSSO PROJECT)....


import { Todo } from '../models/todo';

// interface Todo {
//     id: string;
//     text: string;
// }

// interface RequestBody {
//     text: string;
// }

// type RequestParams = { ///params só funciona com 'type alias', por alguma razão.
//     todoId: string;
// }



// const todos: Todo[] = [
//     {
//         id: 'szxc',
//         text: 'First Todo'
//     }
// ]




// export const getTodos = (req: Request, res: Response, next: NextFunction) => {



//     res.status(200).json(
//         {
//             todos: todos
//         }
//     )

// }




// export const getTodo = (req: Request, res: Response, next: NextFunction) => {

//     res.status(200).json(
//         {
//             todos: todos
//         }
//     )



// }




// export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {


//     const params = req.params as RequestParams;


//     const todoId = params.todoId;

//    const todoIndex =  todos.findIndex(
//         (todo) => {
//             return todo.id === todoId
//         }
//     )

//         todos.splice(todoIndex, 1);


//     res.status(200).json(
//         {
//             todos: todos
//         }
//     )


// }





// export const editTodo = (req: Request, res: Response, next: NextFunction) => {

//     const params = req.params as RequestParams;

//     const body = req.body as RequestBody

//     const todoId = params.todoId;

//    const todoIndex =  todos.findIndex(
//         (todo) => {
//             return todo.id === todoId
//         }
//     )

//         todos[todoIndex] = {
//             id: todos[todoIndex].id,
//             text: body.text
//         }


//     res.status(200).json(
//         {
//             todos: todos
//         }
//     )

// }





// export const addTodo = (req: Request, res: Response, next: NextFunction) => {


//     const body = req.body as RequestBody

//     todos.push(
//         {
//             id: Math.random().toString(),
//             text: body.text
//         }
//     )
//     res.status(201).json(
//         {
//             todos: todos
//         }
//     )
// }























// interface Todo { ///fizemos outsource lá em 'models', com aquela class....
//     id: string;
//     text: string;
// }

interface RequestBody {
    text: string;
}

type RequestParams = { ///params só funciona com 'type alias', por alguma razão.
    todoId: string;
}



const todos: Todo[] = [
    {
        id: 'szxc',
        text: 'First Todo'
    }
]




export const getTodos: RequestHandler = (req, res, next) => {



    res.status(200).json(
        {
            todos: todos
        }
    )

}




export const getTodo: RequestHandler = (req, res, next) => {

    res.status(200).json(
        {
            todos: todos
        }
    )



}




// export const deleteTodo: RequestHandler = (req, res, next) => {


//     const params = req.params as RequestParams;


//     const todoId = params.todoId;

//    const todoIndex =  todos.findIndex(
//         (todo) => {
//             return todo.id === todoId
//         }
//     )

//         todos.splice(todoIndex, 1);


//     res.status(200).json(
//         {
//             todos: todos
//         }
//     )


// }





export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {


    const todoId = req.params.id;


    // const todoId = params.todoId;

   const todoIndex =  todos.findIndex(
        (todo) => {
            return todo.id === todoId
        }
    )

        todos.splice(todoIndex, 1);


    res.status(200).json(
        {
            todos: todos
        }
    )


}






// export const editTodo: RequestHandler = (req, res, next) => {

//     const params = req.params as RequestParams;

//     const body = req.body as RequestBody

//     const todoId = params.todoId;

//    const todoIndex =  todos.findIndex(
//         (todo) => {
//             return todo.id === todoId
//         }
//     )

//         todos[todoIndex] = {
//             id: todos[todoIndex].id,
//             text: body.text
//         }


//     res.status(200).json(
//         {
//             todos: todos
//         }
//     )

// }






export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => { ////versão do professor, com uso desse generic type ('<>') PARA DEFINIR OS PARAMETERS/PARAMS que existirão dentro do nosso request.... 


    const todoId = req.params.id;



    const updatedText = (req.body as {text:string}).text;


  
   const todoIndex =  todos.findIndex(
        (todo) => {
            return todo.id === todoId
        }
    )


    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }





        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: updatedText
        }


    res.status(200).json(
        {
            todos: todos
        }
    )
}


















export const addTodo: RequestHandler = (req, res, next) => {


    const body = req.body as RequestBody;



    const newTodo = new Todo(Math.random().toString(), body.text)

    todos.push(
        // {
        //     id: Math.random().toString(),
        //     text: body.text
        // }

        newTodo
    )
    res.status(201).json(
        {
            todos: todos,
            message: 'Created the Todo.'
        }
    )
}








 
// export const createTodo: RequestHandler = (req, res, next) => {

 
//     const text = (req.body as {text: string}).text; ///  CONSERTADO.
//     const newTodo = new Todo(Math.random().toString(), text);


//     todos.push(newTodo);
// }
