import { VariantProps } from 'class-variance-authority'
import { getContainerVariants } from './styles'
import { ElementType, HTMLAttributes, ReactNode } from 'react'

export interface ContainerProps
  extends VariantProps<typeof getContainerVariants>,
    HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  children: ReactNode
}
