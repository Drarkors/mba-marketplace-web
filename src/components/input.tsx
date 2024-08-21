import * as Label from '@radix-ui/react-label'
import { Eye, EyeOff, OctagonAlert } from 'lucide-react'
import React, { useCallback, useState } from 'react'

import { cn } from '@/libs/utils'

import { AvailableIcons, Icon } from './icon'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  leftIcon?: AvailableIcons
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, label, leftIcon, onChange, onBlur, error, ...props },
    ref,
  ) => {
    const [isFocus, setFocus] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [isHidden, setIsHidden] = useState(true)

    const [inputType, setInputType] = useState(type)

    const handleInputVisibility = useCallback(() => {
      setInputType(isHidden ? 'text' : type)
      setIsHidden((state) => !state)
    }, [isHidden, type])

    return (
      <div className="flex flex-col px-1 py-3 text-gray-400 transition-colors duration-300 placeholder:text-gray-200">
        {label && (
          <Label.Root
            className={cn(
              'font-bold transition-colors duration-300',
              isFocus ? 'text-orange-base' : '',
            )}
            htmlFor={props.id}
          >
            {label.toLocaleUpperCase()}
          </Label.Root>
        )}
        <div className="flex gap-2 border-b-1 border-gray-100 transition-colors duration-300 focus-within:border-gray-400">
          {leftIcon && (
            <Icon
              icon={leftIcon}
              className="self-center"
              hasFocus={isFocus || isFilled}
              hasError={!!error}
            />
          )}
          <input
            type={inputType}
            className={cn(
              'h-12 flex-1 bg-transparent caret-orange-base outline-none',
              className,
            )}
            ref={ref}
            onFocus={() => {
              setFocus(true)
            }}
            onBlur={(e) => {
              if (onBlur) onBlur(e)
              setFocus(false)
            }}
            onChange={(e) => {
              if (onChange) onChange(e)
              setIsFilled(e.target.value.length > 0)
            }}
            {...props}
          />
          {type === 'password' && (
            <button
              type="button"
              className="self-center text-gray-300 transition-colors duration-300 hover:text-orange-base"
              onClick={handleInputVisibility}
            >
              {isHidden ? <EyeOff /> : <Eye />}
            </button>
          )}
        </div>
        {!!error && (
          <div className="mt-1 flex items-center gap-1 text-xs text-danger">
            <OctagonAlert className="h-4 w-4" />
            {error}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
