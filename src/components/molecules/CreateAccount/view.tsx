import { FC } from 'react'
import { CreateAccountProps } from './models'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'

export const CreateAccount: FC<CreateAccountProps> = ({
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Heading variant={'secondary'} as={'h2'}>
        Create Account
      </Heading>
      <Text variant={'default'}>Use your email for registration</Text>
      <Input variant={'default'} placeholder="Name" icon="name" />
      <Input variant={'default'} placeholder="Email" icon="email" />
      <Input variant={'default'} placeholder="Senha" icon="password" />
      <Button variant={'default'}>Sign Up</Button>
    </div>
  )
}
