import { Container } from '@/components/atoms/Container'
import { CreateAccount } from '@/components/molecules/CreateAccount'
import { MessageBack } from '@/components/molecules/MessageBack'

export default function Home() {
  return (
    <Container
      variant={'md'}
      className="grid grid-cols-3 h-screen items-center rounded-2xl"
    >
      <div className="bg-green-300 col-span-1 h-4/6 flex flex-col justify-center rounded-l-lg">
        <Container variant={'md'} className="w-full">
          <MessageBack />
        </Container>
      </div>
      <div className="bg-white col-span-2 h-4/6 flex flex-col justify-center gap-5 rounded-r-lg">
        <Container variant={'md'} className="w-full">
          <CreateAccount />
        </Container>
      </div>
    </Container>
  )
}
