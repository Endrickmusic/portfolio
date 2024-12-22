import BackButton from "../components/BackButton"

export default function Page04() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        minHeight: "50vh",
        background: "#ddddee",
      }}
    >
      <BackButton />
      <h1 style={{ margin: "0 2rem" }}>Kudamm Money</h1>
      <div>
        <video
          style={{
            width: "70%",
          }}
          controls={false}
          preload="none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/Kudamm_Money.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Your page content */}
    </div>
  )
}
