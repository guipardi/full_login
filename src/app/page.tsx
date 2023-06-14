import { Container } from '@/components/atoms/Container'
import { CreateAccount } from '@/components/molecules/CreateAccount'
import { MessageBack } from '@/components/molecules/MessageBack'

export default function Home() {
  return (
    <Container
      variant={'md'}
      className="grid grid-rows-3 p-16 md:grid-rows-none md:grid-cols-3 h-screen items-center"
    >
      <div className="bg-green-300 row-span-1 h-full md:row-auto md:col-span-1 md:h-4/6 flex flex-col justify-center rounded-t-lg md:rounded-l-lg">
        <Container variant={'md'} className="w-full">
          <MessageBack />
        </Container>
      </div>
      <div className="bg-white row-span-2 h-full md:row-auto md:col-span-2 md:h-4/6 flex flex-col justify-center gap-5 rounded-b-lg md:rounded-r-lg">
        <Container variant={'md'} className="w-full">
          <CreateAccount />
        </Container>
      </div>
    </Container>
  )
}
