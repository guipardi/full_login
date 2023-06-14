import { cva } from 'class-variance-authority'

export const getHeadingVariants = cva('text-2xl, font-bold', {
  variants: {
    variant: {
      primary: 'text-white',
      secondary: 'text-green-300',
    },
  },
})
