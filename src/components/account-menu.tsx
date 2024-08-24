import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { LogOut } from 'lucide-react'

import { Avatar } from './avatar'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none">
        <Avatar
          src="./src/assets/profile-example.jpg"
          className="flex h-12 w-12 items-center justify-center rounded-full"
          fallback="U"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mr-6 mt-2 w-40 rounded-md bg-white p-4"
      >
        <DropdownMenuLabel className="flex gap-3">
          <Avatar
            src="./assets/profile-example.jpg"
            className="flex h-8 w-8 cursor-default items-center justify-center rounded-lg"
            fallback="U"
          />
          <span className="line-clamp-2 flex-1 text-pretty text-sm text-gray-300">
            Nome do usuário a a a a aaaaaaaa{' '}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 h-[1px] bg-shape" />
        <DropdownMenuItem
          asChild
          // disabled={isSigningOut}
        >
          <button
            className="flex w-full items-center justify-center gap-2 bg-transparent p-2 text-sm font-medium text-orange-base outline-none transition-colors duration-300 hover:text-orange-dark"
            type="button"
          >
            <span className="">Logout</span>
            <LogOut className="ml-auto h-5 w-5" />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
