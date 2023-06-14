import { FC } from 'react'
import { TextProps } from './models'
import { getTextVariant } from './styles'

export const Text: FC<TextProps> = ({
  as: As = 'p',
  variant = 'default',
  children,
  className,
  ...props
}) => {
  return (
    <As className={`${getTextVariant({ variant })} ${className}`} {...props}>
      {children}
    </As>
  )
}
