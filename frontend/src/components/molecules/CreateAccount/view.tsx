import { FC, useContext } from 'react'
import { CreateAccountProps } from './models'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { ActiveLoginFormContext } from '@/context/ActiveLoginFormContext'

export const CreateAccount: FC<CreateAccountProps> = ({
  className,
  ...props
}) => {
  const { setActiveLoginFormFalse, setActiveLoginFormTrue, activeLoginForm } =
    useContext(ActiveLoginFormContext)

  return (
    <div className="flex flex-col items-center gap-4">
      {activeLoginForm ? (
        <>
          <Heading variant={'secondary'} as={'h2'}>
            Sign In to developer
          </Heading>
          <Text variant={'default'}>Use your email for registration</Text>
          <Input variant={'default'} placeholder="Email" icon="email" />
          <Input variant={'default'} placeholder="Senha" icon="password" />
          <Button onClickFunction={setActiveLoginFormTrue} variant={'default'}>
            Sign In
          </Button>
        </>
      ) : (
        <>
          <Heading variant={'secondary'} as={'h2'}>
            Create Account
          </Heading>
          <Text variant={'default'}>Use your email for registration</Text>
          <Input variant={'default'} placeholder="Name" icon="name" />
          <Input variant={'default'} placeholder="Email" icon="email" />
          <Input variant={'default'} placeholder="Senha" icon="password" />
          <Button onClickFunction={setActiveLoginFormFalse} variant={'default'}>
            Sign Up
          </Button>
        </>
      )}
    </div>
  )
}
