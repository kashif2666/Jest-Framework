import { useState } from "react";
import "./App.css";
import Users from "./Users";
import handleOtherButton from "./helper";

function App() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const handleButton = () => {
    setData2("Hello");
  };

  return (
    <div className="App">
      <p>First Jest Test Case</p>
      <p>Aman Anwar</p>
      {/* <input
        type="text"
        placeholder="Enter username"
        name="username"
        id="userId"
      /> */}
      <br />
      <br />
      {/* <h2>Test onChange event with Input text</h2> */}
      {/* <input
        type="text"
        onChange={(e) => setData(e.target.value + "test")}
        value={data}
      /> */}
      <br /> <br />
      <h2>Test Button Click</h2>
      <button onClick={() => setData("hii")}>Updated Data</button>
      <h2>{data}</h2>
      <br />
      <Users />
      <br /> <br />
      <h2>Functional Component method Testing</h2>
      <button data-testid="btn1" onClick={handleButton}>
        Updated
      </button>
      <button onClick={handleOtherButton}>otherButton</button>
      <h2>{data2}</h2>
      <br />
      <br />
      <img
        title="Man In Weed"
        src="https://plus.unsplash.com/premium_photo-1725024141611-52f6d3870816?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App;
