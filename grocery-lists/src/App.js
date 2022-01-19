import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
   const [list, setList] = useState("");
    const [alert, setAlert] = useState({});
  return (
    <div className="App">
      <h2>Grocery Lists</h2>
    </div>
  );
}

export default App;
