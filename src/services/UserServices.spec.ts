import { User, UserServices } from "./UserServices"

//Verificação se a função está adicionando os usuário no database
describe('UserService', () => {
    const mockDatabase: User[] = []
    const userService = new UserServices(mockDatabase)


    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('Stormi', "stormi@pitbull.com")
        expect(mockConsole).toHaveBeenCalledWith('Database atualizado', mockDatabase)
    })

})