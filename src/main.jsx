import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import "./index.css"
import App from "./pages/App"

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
)
