import { cva } from 'class-variance-authority'

export const getContainerVariants = cva('mx-auto', {
  variants: {
    variant: {
      sm: 'max-w-1/2 px-5 md:px-8',
      md: 'max-w-360 px-5 md:px-8',
    },
  },
})
