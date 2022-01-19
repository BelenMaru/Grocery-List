import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
   const [list, setList] = useState("");
    const [alert, setAlert] = useState({show:false, msg: '', type:''});
  return (
    <section className="section-center">
    <div className = "grocery-container">
    <List/>

    </div>
     </section>
  );
}

export default App;
