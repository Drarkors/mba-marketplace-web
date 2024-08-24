import { ImageUp, OctagonAlert } from 'lucide-react'
import React, { useState } from 'react'

import { cn } from '@/libs/utils'

export interface FileUploadInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant: 'profile' | 'product'
  error?: string
  hasText?: boolean
}

const FileUploadInput = React.forwardRef<
  HTMLInputElement,
  FileUploadInputProps
>(({ error, variant = 'profile', onChange, ...props }, ref) => {
  const [image, setImage] = useState('')

  return (
    <div
      className={'relative mr-auto flex flex-col overflow-hidden rounded-lg'}
    >
      {image && (
        <img
          src={image}
          alt="Foto de perfil"
          className={cn(
            'absolute flex-1',
            variant === 'profile' ? 'h-28 w-28' : 'h-56 w-56',
          )}
        />
      )}
      <label
        htmlFor={props.id}
        title="Área de upload"
        className={cn(
          'relative flex cursor-pointer items-center justify-center rounded-lg transition-colors duration-300',
          !image
            ? 'bg-orange-base/15 hover:bg-orange-base/25'
            : 'text-transparent hover:bg-gray-500/50 hover:text-white',
          variant === 'profile' ? 'h-28 w-28' : 'h-56 w-56',
        )}
      >
        <input
          type="file"
          ref={ref}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const reader = new FileReader()
              reader.onloadend = () => {
                if (reader.result) setImage(reader.result.toString())
              }
              reader.readAsDataURL(e.target.files[0])
            } else {
              setImage('')
            }

            if (onChange) onChange(e)
          }}
          className="hidden"
          hidden
          accept="image/jpeg,image/jpg,image/png,image/webp"
          {...props}
        />

        {!image ? (
          <ImageUp className="h-7 w-7 text-orange-base" />
        ) : (
          <ImageUp className="h-7 w-7" />
        )}
      </label>
      {!!error && (
        <span className="relative m-1 flex items-center gap-1 text-sm text-danger">
          <OctagonAlert className="h-4 w-4" />
          {error}
        </span>
      )}
    </div>
  )
})

FileUploadInput.displayName = 'FileUploadInput'

export { FileUploadInput }
