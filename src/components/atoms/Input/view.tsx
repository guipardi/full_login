'use client'
import { FC } from 'react'
import { InputProps } from './models'
import { getInputVariants } from './styles'
import { Envelope, LockSimple, User } from 'phosphor-react'

export const Input: FC<InputProps> = ({
  variant,
  icon,
  placeholder,
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-row items-center gap-1 bg-gray-300 p-2">
      {icon === 'name' && <User size={20} className="text-gray-800" />}
      {icon === 'email' && <Envelope size={30} className="text-gray-800" />}
      {icon === 'password' && (
        <LockSimple size={30} className="text-gray-800" />
      )}
      <input
        className={`${getInputVariants({ variant })} ${className}`}
        {...props}
        placeholder={placeholder}
      >
        {children}
      </input>
    </div>
  )
}
