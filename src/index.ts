import express, { Request, Response} from 'express'
import { routes } from './routes'
//import { UserController } from './controllers/UserControler'

const server = express()

server.use(express.json())
server.use(routes)

//const UserControl = new UserController()

server.get('/', (request: Request, response: Response ): void => {
    response.status(200).json({ message: "My api"})
})

// server.post('/user', UserControl.createUser)
// server.get('/user', UserControl.getAllUsers)

server.listen(5000, () => {console.log('server on update')})