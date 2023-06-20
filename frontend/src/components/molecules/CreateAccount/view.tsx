import { FC, useContext } from 'react'
import { CreateAccountProps } from './models'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { ActiveLoginFormContext } from '@/context/ActiveLoginFormContext'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const CreateAccount: FC<CreateAccountProps> = ({
  className,
  ...props
}) => {
  const { setActiveLoginFormFalse, setActiveLoginFormTrue, activeLoginForm } =
    useContext(ActiveLoginFormContext)

  const { register, handleSubmit } = useForm()

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  })

  function onSubmitLogin(data: any) {
    api
      .get('/users')
      .then((response) => {
        const users = response.data
        const matchedUser = users.find((user: any) => {
          return user.email === data.email && user.password === data.password
        })

        if (matchedUser) {
          alert(`Login realizado com sucesso. Bem vindo(a)!`)
        } else {
          alert('Email ou senha invalidos.')
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar usuários:', error)
        // Lidar com erros na requisição
      })
  }

  function onSubmitRegistration(data: any) {
    api
      .post('users', {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        // Exibir mensagem de sucesso na tela
        console.log('Registro realizado com sucesso!')
      })
      .catch((error) => {
        // Tratar erros
        console.error('Erro ao realizar o registro:', error)
      })
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {activeLoginForm ? (
        <>
          <Heading variant={'secondary'} as={'h2'}>
            Sign In to developer
          </Heading>
          <Text variant={'default'}>Use your email for Login</Text>
          <form
            onSubmit={handleSubmit((data, event: any) => {
              onSubmitLogin(data)
              event.preventDefault()
            })}
            className="flex flex-col gap-4 w-full items-center"
          >
            <Input
              {...register('email')}
              variant={'default'}
              placeholder="Email"
              icon="email"
            />
            <Input
              {...register('password')}
              variant={'default'}
              placeholder="Senha"
              icon="password"
            />
            <Button
              type={activeLoginForm ? 'submit' : 'button'}
              onClickFunction={setActiveLoginFormTrue}
              variant={'default'}
            >
              Sign In
            </Button>
          </form>
        </>
      ) : (
        <>
          <Heading variant={'secondary'} as={'h2'}>
            Create Account
          </Heading>
          <Text variant={'default'}>Use your email for registration</Text>
          <form
            onSubmit={handleSubmit((data, event: any) => {
              onSubmitRegistration(data)
              event.preventDefault()
            })}
            className="flex flex-col gap-4 w-full items-center"
          >
            <Input
              {...register('name')}
              variant={'default'}
              placeholder="Name"
              icon="name"
            />
            <Input
              {...register('email')}
              variant={'default'}
              placeholder="Email"
              icon="email"
            />
            <Input
              {...register('password')}
              variant={'default'}
              placeholder="Senha"
              icon="password"
            />
            <Button
              type={activeLoginForm ? 'submit' : 'button'}
              onClickFunction={setActiveLoginFormFalse}
              variant={'default'}
            >
              Sign Up
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
