export interface User {
    name: string,
    email: string
}

const db = [
    {
        "name": "Raphael",
        "email": "rapha@teste.com"
    }
]
//Manipulando o banco de dados (database)
export class UserServices {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('Database atualizado', this.db)
    }


    getAllUsers = () => {
        return db
    }


}