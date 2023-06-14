import { VariantProps } from 'class-variance-authority'
import { getHeadingVariants } from './styles'
import { ElementType, HTMLAttributes, ReactNode } from 'react'

export interface HeadingProps
  extends VariantProps<typeof getHeadingVariants>,
    HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType
  children: ReactNode
}
