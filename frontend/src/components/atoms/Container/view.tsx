import { FC } from 'react'
import { ContainerProps } from './models'
import { getContainerVariants } from './styles'

export const Container: FC<ContainerProps> = ({
  as: As = 'div',
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <As
      className={`${getContainerVariants({ variant })} ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
