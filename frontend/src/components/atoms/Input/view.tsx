import { FC, forwardRef } from 'react'
import { InputProps } from './models'
import { getInputVariants } from './styles'
import { Envelope, LockSimple, User } from 'phosphor-react'

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent(
    { variant, icon, placeholder, children, className, ...props },
    ref,
  ) {
    return (
      <div className="flex flex-row items-center gap-1 bg-gray-300 p-2 w-1/2">
        {icon === 'name' && <User size={30} className="text-gray-800" />}
        {icon === 'email' && <Envelope size={30} className="text-gray-800" />}
        {icon === 'password' && (
          <LockSimple size={30} className="text-gray-800" />
        )}
        <input
          ref={ref}
          className={`${getInputVariants({ variant })} ${className}`}
          placeholder={placeholder}
          {...props}
        >
          {children}
        </input>
      </div>
    )
  },
)

Input.displayName = 'Input'
