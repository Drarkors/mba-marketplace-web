import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 bg-background p-6">
      <aside className="bg-bg flex h-full flex-col bg-contain bg-center bg-no-repeat p-4">
        <div className="flex gap-5">
          <img src="./src/assets/logo.svg" alt="logo" />
          <div>
            <h1 className="font-dm-sans text-xl font-bold">Marketplace</h1>
            <p>Painel de Vendedor</p>
          </div>
        </div>
      </aside>

      <main className="relative flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}
