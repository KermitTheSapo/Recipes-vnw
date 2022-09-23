import React from "react";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Latest from "./components/Main/Latest.js";
import About from "./components/Main/About.js";
import Subscribe from "./components/Main/Subscribe.js";

export default function App(){
  return(
    <div>
      <Header/>
      <Latest/>
      <About/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}