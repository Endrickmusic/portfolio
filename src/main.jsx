import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import "./index.css"
import App from "./pages/App"
import { Overlay } from "./components/Overlay"

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
    <Overlay
      email="mail@christianhohenbild.de"
      title="Creative Whatever"
      date="09/12/2024"
    />
  </HashRouter>
)
