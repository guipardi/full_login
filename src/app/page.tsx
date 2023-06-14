import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Input } from '@/components/atoms/Input'

export default function Home() {
  return (
    <>
      <Heading as={'h1'} variant={'primary'}>
        Welcome to full login
      </Heading>
      <Input variant={'default'} placeholder="Password" icon="password" />
      <Button variant={'transparent'}>Sign In</Button>
    </>
  )
}
