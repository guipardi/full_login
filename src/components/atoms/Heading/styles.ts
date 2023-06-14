import { cva } from 'class-variance-authority'

export const getHeadingVariants = cva('text-4xl font-bold', {
  variants: {
    variant: {
      primary: 'text-white',
      secondary: 'text-green-300',
    },
  },
})
