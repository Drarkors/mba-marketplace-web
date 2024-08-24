import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/button'
import { FileUploadInput } from '@/components/file-upload-input'
import { Input } from '@/components/input'
import { MaskedInput } from '@/components/masked-input'

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

const signUpForm = z
  .object({
    email: z
      .string({ message: 'Campo obrigatório' })
      .email({ message: 'Deve conter um e-mail válido' }),
    name: z
      .string({ message: 'Campo obrigatório' })
      .min(3, { message: 'Deve conter um nome' }),
    phone: z
      .string({ message: 'Campo obrigatório' })
      .min(9, { message: 'Deve conter um telefone/celular válido' }),
    password: z
      .string({ message: 'Campo obrigatório' })
      .min(8, 'Senha deve conter pelo menos 8 caracteres'),
    confirmPassword: z
      .string({ message: 'Campo obrigatório' })
      .min(8, 'Confirmação de senha deve conter pelo menos 8 caracteres'),
    profilePicture: z
      .instanceof(File, { message: 'Seleção de imagem obrigatória' })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message:
          'O arquivo deve ser de um dos seguintes formatos: .jpeg, .jpg, .png ou .webp',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senha deve ser igual a sua confirmação',
    path: ['confirmPassword'],
  })

type SignUpFormType = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpForm),
    defaultValues: {},
  })

  function handleSignUp({
    email,
    password,
    confirmPassword,
    name,
    phone,
    profilePicture,
  }: SignUpFormType) {}

  return (
    <div className="no-scrollbar flex h-full w-full flex-col gap-12 overflow-y-auto">
      <div>
        <h1 className="font-dm-sans text-xl font-bold">Crie sua conta</h1>
        <span className="text-gray-300">
          Informe os seus dados pessoais e de acesso
        </span>
      </div>

      <form
        className="flex flex-1 flex-col gap-8"
        id="signup-form"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-lg">Perfil</h2>
          <Controller
            control={control}
            name="profilePicture"
            render={({
              field: { value: _v, onChange, ...field },
              fieldState,
            }) => {
              return (
                <FileUploadInput
                  id="profilePicture"
                  variant="profile"
                  error={fieldState.error?.message}
                  onChange={(e) =>
                    onChange(e.target.files ? e.target.files[0] : undefined)
                  }
                  {...field}
                />
              )
            }}
          />

          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <Input
                id="name"
                placeholder="Seu nome completo"
                leftIcon="user"
                label="nome"
                error={fieldState.error?.message ?? undefined}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState }) => {
              return (
                <MaskedInput
                  id="phone"
                  placeholder="(00) 0 0000-0000"
                  mask="phone"
                  leftIcon="mail"
                  label="celular"
                  error={fieldState.error?.message ?? undefined}
                  {...field}
                />
              )
            }}
          />
        </div>

        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-lg">Acesso</h2>

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <Input
                id="email"
                placeholder="Seu e-mail de acesso"
                leftIcon="mail"
                label="e-mail"
                error={fieldState.error?.message ?? undefined}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                id="password"
                placeholder="Senha de acesso"
                leftIcon="password"
                label="Senha"
                error={fieldState.error?.message ?? undefined}
                type="password"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <Input
                id="confirmPassword"
                placeholder="Confirme a senha"
                leftIcon="password"
                label="Confirmar senha"
                error={fieldState.error?.message ?? undefined}
                type="password"
                {...field}
              />
            )}
          />
        </div>
      </form>

      <Button
        variant="default"
        type="submit"
        form="signup-form"
        className="w-full"
        isLink
      >
        <span className="text-left">Cadastrar</span>
      </Button>

      <div className="mt-8 flex flex-col gap-4">
        <span className="text-gray-300">Já tem uma conta?</span>
        <Button variant="reversed" isLink onClick={() => navigate('/sign-in')}>
          Acessar
        </Button>
      </div>
    </div>
  )
}
