import { FC } from 'react'
import { ButtonProps } from './models'
import { getButtonVariants } from './styles'

export const Button: FC<ButtonProps> = ({
  as: As = 'button',
  variant,
  children,
  className,
  onClickFunction,
  ...props
}) => {
  return (
    <As
      className={`${getButtonVariants({ variant })} ${className}`}
      onClick={onClickFunction}
      {...props}
    >
      {children}
    </As>
  )
}
