import { VariantProps } from 'class-variance-authority'
import { getButtonVariants } from './styles'
import { ElementType, HTMLAttributes, ReactNode } from 'react'

export interface ButtonProps
  extends VariantProps<typeof getButtonVariants>,
    HTMLAttributes<HTMLButtonElement> {
  as?: ElementType
  children: ReactNode
}
