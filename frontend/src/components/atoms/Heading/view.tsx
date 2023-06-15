import { FC } from 'react'
import { HeadingProps } from './models'
import { getHeadingVariants } from './styles'

export const Heading: FC<HeadingProps> = ({
  as: As = 'h2',
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <As
      className={`${getHeadingVariants({ variant })} ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
