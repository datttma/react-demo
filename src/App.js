import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import BaiTapLayout2 from "./Components/BaiTapLayout2/BaiTapLayout2";
import DataBinding from "./Components/DataBinding/DataBinding";
import EventBinding from "./Components/EventBinding/EventBinding";
import RenderWithState from "./Components/RenderWithState/RenderWithState";
import BaiTapChonXe from "./Components/BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./Components/RenderWithMap/RenderWithMap";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2/> */}
      {/* <DataBinding/> */}
      {/* <EventBinding/> */}
      {/* <RenderWithState/> */}
      {/* <BaiTapChonXe/> */}
      <RenderWithMap/>
    </div>
  );
}

export default App;
