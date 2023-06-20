import { Database } from './database.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: (req, res) => {
      const users = database.getAll('users')
      res.end(JSON.stringify(users))
    },
  },
  {
    method: 'OPTIONS',
    path: '/users',
    handler: (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
      res.writeHead(200).end()
    },
  },
  {
    method: 'POST',
    path: '/users',
    handler: (req, res) => {
      const { name, email, password } = req.body

      const newUser = {
        name,
        email,
        password,
      }

      database.insert('users', newUser)

      return res.end(
        `Usuário criado com sucesso, nome: ${JSON.stringify(
          newUser.name,
        )}, email: ${JSON.stringify(newUser.email)}, senha: ${JSON.stringify(
          newUser.password,
        )}`,
      )
    },
  },
]
