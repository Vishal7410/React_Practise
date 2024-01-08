//import { useState } from "react";

import "./App.css";
import  Body  from "./Component/Body/Body.jsx";
import Footer from "./Component/Footer/Footer.jsx"
import { HeaderComponent } from "./Component/HeaderComponent/HeaderComponent.jsx";

function App() {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer/>
    </>
  );
}
export default App;

