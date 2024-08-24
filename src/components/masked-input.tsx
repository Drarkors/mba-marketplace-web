import * as Label from '@radix-ui/react-label'
import { OctagonAlert } from 'lucide-react'
import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'

import { cn } from '@/libs/utils'

import { AvailableIcons, Icon } from './icon'

const Masks = { phone: { mask: '(99) 9 9999-9999' } }

export interface MaskedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  leftIcon?: AvailableIcons
  error?: string
  mask: keyof typeof Masks
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    { className, label, leftIcon, onChange, onBlur, error, mask, ...props },
    ref,
  ) => {
    const [isFocus, setFocus] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    return (
      <div className="flex flex-col">
        {label && (
          <Label.Root
            className={cn(
              'text-xs font-bold text-gray-300 transition-colors duration-300',
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
          <ReactInputMask
            mask={Masks[mask].mask}
            type="text"
            className={cn(
              'h-12 flex-1 bg-transparent caret-orange-base outline-none placeholder:text-gray-200',
              className,
            )}
            // ref={ref}
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
            value={props.value}
          ></ReactInputMask>
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

MaskedInput.displayName = 'MaskedInput'

export { MaskedInput }
