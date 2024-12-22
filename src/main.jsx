import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Logo from "/face-blowing-a-kiss.svg"
import "./index.css"
import App from "./pages/App"

function Overlay({ email, title, date, showLogo = true }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <a
        href={`mailto:${email}`}
        className="absolute bottom-10 left-40 sans-serif text-2xl pointer-events-auto"
      >
        contact
        <br />
        {email.split("@")[0]}
      </a>
      <div className="absolute top-7 left-10 sans-serif text-2xl pointer-events-auto">
        {title}
      </div>
      <div className="absolute bottom-6 right-10 serif text-2xl pointer-events-auto">
        {date}
      </div>
      {showLogo && (
        <img
          src={Logo}
          // className="absolute bottom-30 left-40 w-20"
          style={{ position: "absolute", bottom: 30, left: 40, width: 80 }}
          scale={1.5}
        />
      )}
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Overlay
      email="mail@christianhohenbild.de"
      title="Creative Whatever"
      date="09/12/2024"
    />
  </BrowserRouter>
)
