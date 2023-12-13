import logo from "./logo.svg";
import "./App.css";

import NazariiImg from "./img/nazarii-img.webp";

function App() {
  return (
    <div className="App">
      <h3>Team Project</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h3>Nazarii Prokopchuk</h3>
          <p>Role: QA</p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={NazariiImg}
          ></img>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
