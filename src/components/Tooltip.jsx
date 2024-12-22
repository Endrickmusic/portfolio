import React from "react"

const Tooltip = ({ position, text }) => {
  return (
    <div
      className="sans-serif text-2xl"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        background: "white",
        border: "1px solid black",
        padding: "10px 20px",
        color: "#000000",
        borderRadius: "1px",
        transform: "translate(0, -100%)",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {text}
    </div>
  )
}

export default Tooltip
