import { Database } from './database.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: (req, res) => {
      const { email, password } = req.body

      const user = database.select('users', {
        email,
        password,
      })

      if (user) {
        return res.end(JSON.stringify(user))
      }
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
