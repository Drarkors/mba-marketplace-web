import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid h-screen grid-cols-5 overflow-hidden bg-background p-6">
      <aside className="col-span-3 flex h-full w-full flex-col bg-bg bg-contain bg-center bg-no-repeat p-4">
        <div className="flex gap-5">
          <img src="./src/assets/logo.svg" alt="logo" />
          <div>
            <h1 className="font-dm-sans text-xl font-bold">Marketplace</h1>
            <p>Painel de Vendedor</p>
          </div>
        </div>
      </aside>

      <main className="col-span-2 m-2 block gap-12 overflow-hidden rounded-lg bg-white px-20 py-16 shadow-lg">
        <Outlet />
      </main>
    </div>
  )
}
