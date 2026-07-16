export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        gap: "32px",
        padding: "40px 20px",
      }}
    >
      <img
        src="/cover.jpeg"
        alt="U Da 1 album cover"
        style={{ width: "260px", height: "260px", objectFit: "cover" }}
      />
      <h1 style={{ fontSize: "2rem", letterSpacing: "0.1em", margin: 0, textTransform: "uppercase" }}>
        u da 1
      </h1>
      <p style={{ fontSize: "0.9rem", color: "#aaa", margin: 0, letterSpacing: "0.05em" }}>
        protect — slimedude2003
      </p>
      <audio
        controls
        style={{
          width: "100%",
          maxWidth: "600px",
          accentColor: "#fff",
        }}
      >
        <source src="/u-da-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
