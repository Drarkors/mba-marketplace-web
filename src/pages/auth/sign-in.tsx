import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

const signInForm = z.object({
  email: z
    .string({ message: 'Campo obrigatório' })
    .email({ message: 'Deve conter um e-mail válido' }),
  password: z.string({ message: 'Campo obrigatório' }),
})

type SignInFormType = z.infer<typeof signInForm>

export function SignIn() {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<SignInFormType>({
    resolver: zodResolver(signInForm),
    defaultValues: {},
  })

  function handleSignIn({ email, password }: SignInFormType) {}

  return (
    <div className="flex h-full w-full flex-col gap-12">
      <div>
        <h1 className="mb-2 font-dm-sans text-xl font-bold">
          Acesse sua conta
        </h1>
        <span className="text-gray-300">
          Informe seu e-mail e senha para entrar
        </span>
      </div>

      <form
        className="flex flex-col gap-5"
        id="signin-form"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Input
              id="email"
              placeholder="Seu e-mail cadastrado"
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
              placeholder="Sua senha de acesso"
              leftIcon="password"
              label="password"
              error={fieldState.error?.message ?? undefined}
              type="password"
              {...field}
            />
          )}
        />
      </form>

      <Button
        variant="default"
        type="submit"
        form="signin-form"
        className="w-full"
        isLink
      >
        <span className="text-left">Acessar</span>
      </Button>

      <div className="mt-auto flex w-full flex-col gap-4">
        <span className="text-gray-300">Ainda não tem uma conta?</span>

        <Button
          onClick={() => {
            navigate('/sign-up')
          }}
          variant="reversed"
          type="button"
          isLink
        >
          Cadastrar
        </Button>
      </div>
    </div>
  )
}
