import express, { Request, Response} from 'express'

const server = express()

server.use(express.json())

server.get('/', (request: Request, response: Response ): any => {
    return response.status(200).json({ message: "My api"})
})

server.post('/user', (request: Request, response: Response): any => {
    const body = request.body
    console.log(body)
    return response.status(201).json({ message: "Usuário criado"})
})

server.listen(5000, () => {console.log('server on update')})