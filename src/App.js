import logo from "./logo.svg";
import VadymImg from "./image/VadymImg.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Team Project</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div></div>
        <div></div>
        <div>
          <h3>Vadym Prosvirov</h3>
          <p>Role: Developer</p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={VadymImg}
          ></img>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
