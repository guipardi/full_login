import { cva } from 'class-variance-authority'

export const getTextVariant = cva('font-sans text-base', {
  variants: {
    variant: {
      default: 'font-medium',
      uppercase: 'font-medium uppercase',
    },
  },
})
