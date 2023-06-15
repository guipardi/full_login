import { VariantProps } from 'class-variance-authority'
import { getTextVariant } from './styles'
import { ElementType, HTMLAttributes, ReactNode } from 'react'

export interface TextProps
  extends VariantProps<typeof getTextVariant>,
    HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType
  children: ReactNode
}
