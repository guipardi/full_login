'use client'
import { Heading } from '@/components/atoms/Heading'
import { MessageBackProps } from './models'
import { FC, useContext } from 'react'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'
import { ActiveLoginFormContext } from '@/context/ActiveLoginFormContext'

export const MessageBack: FC<MessageBackProps> = ({ ...props }) => {
  const { toogleActiveLoginForm } = useContext(ActiveLoginFormContext)

  return (
    <div className="flex flex-col items-center gap-4">
      <Heading variant={'primary'} as={'h2'} className="text-center">
        Welcome Back!
      </Heading>
      <Text variant={'default'} className="text-white text-center">
        To keep connected with us please login with your personal info
      </Text>
      <Button variant={'transparent'} onClickFunction={toogleActiveLoginForm}>
        Sign In
      </Button>
    </div>
  )
}
