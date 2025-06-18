const db = [
    {
        "name": "Pimenta",
        "email": "pimentas@teste.com"
    }
]
//Manipulando o banco de dados (database)
export class UserServices {
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        db.push(user)
        console.log('db atualizado...', db)
    }


    getAllUsers = () => {
        return db
    }


}