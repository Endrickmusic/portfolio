export default function Page02() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        minHeight: "50vh",
        background: "#ddaadd",
      }}
    >
      <h1 style={{ margin: "0 2rem" }}>Vellum</h1>
      <div>
        <video
          style={{
            width: "70%",
            maxWidth: "400px",
          }}
          controls={false}
          preload="none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./video/Vellum_dance.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Your page content */}
    </div>
  )
}
