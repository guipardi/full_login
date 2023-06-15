import { VariantProps } from 'class-variance-authority'
import { getInputVariants } from './styles'
import { HTMLAttributes, ReactNode } from 'react'

export interface InputProps
  extends VariantProps<typeof getInputVariants>,
    HTMLAttributes<HTMLInputElement> {
  placeholder: string
  icon: 'name' | 'email' | 'password'
}
