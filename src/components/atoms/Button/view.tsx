import { FC } from 'react'
import { ButtonProps } from './models'
import { getButtonVariants } from './styles'

export const Button: FC<ButtonProps> = ({
  as: As = 'button',
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <As className={`${getButtonVariants({ variant })} ${className}`} {...props}>
      {children}
    </As>
  )
}
