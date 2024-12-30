import ComputeShader from "../components/ComputeShader.jsx"

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        minHeight: "50vh",
        background: "#ddddee",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "2rem 0" }}>
        <h1 style={{ marginBottom: "2rem" }}>About</h1>

        <p style={{ marginBottom: "1.5rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>

      <img
        src="./textures/Portrait_02.jpg"
        alt="Portrait"
        style={{
          maxWidth: "30%",
          height: "30%",
          margin: "2rem 0",
        }}
      />
    </div>
  )
}
