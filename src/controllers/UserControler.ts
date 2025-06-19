import {Request, Response} from "express"
import { UserServices } from "../services/UserServices"


export class UserController {
    userService: UserServices

    constructor(
        userService = new UserServices()
    ){
        this.userService = userService
    }

    createUser = (request: Request, response: Response): any => {
        const user = request.body

        //Validação de usuário
        if(!user.name || !user.email){
            return response.status(400).json({message: 'Bad Resquest! Name or Email invalid.'})
        }

        this.userService.createUser(user.name, user.email)
        // db.push(body)
         response.status(201).json({ message: "Usuário criado" })
    }


    getAllUsers = (request: Request, response: Response): any => {

        const users = this.userService.getAllUsers()

        return response.status(200).json( users )
    }

}
