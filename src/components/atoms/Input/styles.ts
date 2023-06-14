import { cva } from 'class-variance-authority'

export const getInputVariants = cva('py-1 px-5 w-full focus:outline-none', {
  variants: {
    variant: {
      default: 'bg-gray-300 text-black',
    },
  },
})
