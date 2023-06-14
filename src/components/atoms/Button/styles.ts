import { cva } from 'class-variance-authority'

export const getButtonVariants = cva(
  'py-1 px-16 rounded-2xl text-white uppercase',
  {
    variants: {
      variant: {
        default: 'bg-green-300',
        transparent: 'bg-transparent border border-white',
      },
    },
  },
)
