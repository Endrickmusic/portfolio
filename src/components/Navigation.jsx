import { Link, useLocation, Outlet } from "react-router-dom"

export function Navigation({ email = "mail@christianhohenbild.de" }) {
  const location = useLocation()

  const linkStyles = (path) => `
    pointer-events-auto
    text-xl
    hover:text-white
    ${location.pathname === path ? "underline cursor-default" : ""}
  `

  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <nav className="h-full w-full p-8">
        {/* Top Left */}
        <Link to="/" className={`absolute top-6 left-8 ${linkStyles("/")}`}>
          Home
        </Link>

        {/* Top Right */}
        <Link
          to="/about"
          className={`absolute top-6 right-8 ${linkStyles("/about")}`}
        >
          About
        </Link>

        {/* Bottom Left */}
        <a
          href={`mailto:${email}`}
          className="absolute bottom-6 left-8 pointer-events-auto text-xl hover:text-white"
        >
          Contact
        </a>

        {/* Bottom Right */}
        <Link
          to="/imprint"
          className={`absolute bottom-6 right-8 ${linkStyles("/imprint")}`}
        >
          Imprint
        </Link>

        <Outlet />
      </nav>
    </div>
  )
}
