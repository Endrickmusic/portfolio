import React from "react"

const Tooltip = ({ position, text }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "5px",
        borderRadius: "5px",
        pointerEvents: "none",
      }}
    >
      {text}
    </div>
  )
}

export default Tooltip
