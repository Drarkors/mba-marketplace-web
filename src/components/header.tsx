import { ChartSpline, Package, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { AccountMenu } from './account-menu'
import { Button } from './button'
import { NavLink } from './nav-link'

export function Header() {
  const navigator = useNavigate()

  return (
    <header className="border-b-1 border-shape bg-transparent">
      <div className="flex h-20 w-full items-center p-4">
        <img
          src="./src/assets/logo.svg"
          alt="Marketplace Logo"
          className="w-14"
        />

        <div className="flex-1" />

        <nav className="flex items-center space-x-4">
          <NavLink to="/">
            <ChartSpline className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink to="/products">
            <Package className="h-4 w-4" />
            Products
          </NavLink>
        </nav>

        <div className="flex-1" />

        <div className="flex h-full items-center space-x-8">
          <Button
            className="h-fit gap-2 px-3 py-2 text-white"
            variant="default"
            onClick={() => {
              navigator('/products/new')
            }}
          >
            <Plus />
            Novo produto
          </Button>

          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
