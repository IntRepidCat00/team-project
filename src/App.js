import logo from "./img/max.png";
import "./App.css";
 
function App() {
  return (
    <div className="App">
      <h3>Team Project</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div></div>
        <div>
          <h3>Max Romaniuk</h3>
          <p>Role: UI Designer</p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={logo}
          ></img>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
