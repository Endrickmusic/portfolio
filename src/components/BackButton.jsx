import { useNavigate } from "react-router-dom"

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/")}
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      ← Back
    </button>
  )
}
