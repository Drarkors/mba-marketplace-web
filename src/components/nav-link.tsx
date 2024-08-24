import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-gray-300 transition-colors duration-500 hover:bg-shape hover:text-orange-base data-[current=true]:bg-shape data-[current=true]:text-orange-base"
      {...props}
    ></Link>
  )
}
