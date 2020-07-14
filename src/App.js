import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import BaiTapLayout2 from "./Components/BaiTapLayout2/BaiTapLayout2";
import DataBinding from "./Components/DataBinding/DataBinding";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2/> */}
      <DataBinding/>
    </div>
  );
}

export default App;
