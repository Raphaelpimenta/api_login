// import { makeMockRequest } from "../__mocks__/mockRequest.mock"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { UserServices } from "../services/UserServices"
import { UserController } from "./UserControler"
import { Request } from "express"





describe('UserController', () => {
    const mockUserService: Partial<UserServices> = {
        createUser: jest.fn()
    }

    const UserControler = new UserController(mockUserService as UserServices)

    it('Deve adicionar um novo usuário', () => {
        // const mockRequest = makeMockRequest({})
        const mockRequest = {
            body: {
                name: 'Raphael',
                email: 'rapha@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        UserControler.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message: "Usuário criado" })
    })
})