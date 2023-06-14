import { Heading } from '@/components/atoms/Heading'
import { MessageBackProps } from './models'
import { FC } from 'react'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'

export const MessageBack: FC<MessageBackProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Heading variant={'primary'} as={'h2'}>
        Welcome Back!
      </Heading>
      <Text variant={'default'} className="text-white text-center">
        To keep connected with us please login with your personal info
      </Text>
      <Button variant={'transparent'}>Sign In</Button>
    </div>
  )
}
