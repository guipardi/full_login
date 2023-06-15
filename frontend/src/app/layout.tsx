import { ActiveLoginFormProvider } from '@/context/ActiveLoginFormContext'
import '../styles/global.css'

export const metadata = {
  title: 'Full Login',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <ActiveLoginFormProvider>
        <body className="bg-gray-300">{children}</body>
      </ActiveLoginFormProvider>
    </html>
  )
}
