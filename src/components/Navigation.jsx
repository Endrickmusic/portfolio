import Logo from "/svg/face-blowing-a-kiss.svg"
import { Link, useLocation, Outlet } from "react-router-dom"

export function Navigation({
  email = "mail@christianhohenbild.de",
  title,
  date,
  showLogo = true,
}) {
  const location = useLocation()

  return (
    <div className="absolute z-20 w-full h-full pointer-events-none">
      <nav className="border-transparent pointer-events-auto">
        <ul className="flex justify-start mx-10 m-6 space-x-5 border-transparent text-xl">
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "cursor-default"
                  : "hover:text-gray-600"
              }
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/page1"
              className={location.pathname === "/page1" ? "underline" : ""}
            >
              1
            </Link>
          </li>
          <li>
            <Link
              to="/page2"
              className={location.pathname === "/page2" ? "underline" : ""}
            >
              2
            </Link>
          </li>
          <li>
            <Link
              to="/page3"
              className={location.pathname === "/page3" ? "underline" : ""}
            >
              3
            </Link>
          </li>
          <li>
            <Link
              to="/page4"
              className={location.pathname === "/page4" ? "underline" : ""}
            >
              4
            </Link>
          </li>
          <li>
            <Link
              to="/page5"
              className={location.pathname === "/page5" ? "underline" : ""}
            >
              5
            </Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />

      <div className="absolute top-7 right-14 pointer-events-auto text-xl">
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "underline cursor-default"
              : "hover:text-gray-600 hover:text-white"
          }
        >
          About
        </Link>
      </div>
      <a
        href={`mailto:${email}`}
        className="absolute bottom-10 left-12 sans-serif text-lg pointer-events-auto"
      >
        Contact
        {/* <br />
        {email.split("@")[0]} */}
      </a>
      {/* {showLogo && (
        <img src={Logo} className="absolute bottom-7 left-8 w-20 h-20" />
      )} */}
      <div className="absolute top-7 right-14 pointer-events-auto text-xl">
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "underline cursor-default"
              : "hover:text-gray-600 hover:text-white"
          }
        >
          About
        </Link>
      </div>

      <div className="absolute bottom-7 right-14 pointer-events-auto text-xl">
        <Link
          to="/imprint"
          className={
            location.pathname === "/imprint"
              ? "underline cursor-default"
              : "hover:text-gray-600 hover:text-white"
          }
        >
          Imprint
        </Link>
      </div>
    </div>
  )
}
