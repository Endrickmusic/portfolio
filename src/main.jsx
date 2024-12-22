import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Logo from "/face-blowing-a-kiss.svg"
import "./index.css"
import App from "./pages/App"

function Overlay({ email, title, date, showLogo = true }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        href={`mailto:${email}`}
        style={{
          position: "absolute",
          bottom: 40,
          left: 140,
          fontSize: "20px",
          pointerEvents: "auto",
        }}
      >
        contact
        <br />
        {email.split("@")[0]}
      </a>
      <div
        style={{ position: "absolute", top: 40, left: 40, fontSize: "20px" }}
      >
        {title}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "20px",
        }}
      >
        {date}
      </div>
      {showLogo && (
        <img
          src={Logo}
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
