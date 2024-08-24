import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import { useState } from "react";
import { lazy } from "react";
const skills = ["mongoDB", "Express", "React", "Node", "HTML", "CSS"];

function App() {

  

 




  

  return (
    <>
    <lazy>
      <img src='' ></img>
    </lazy>

      <div className="header">
        <h1 className="header__body--line-1">
          My<span className="header__body--line-1--span-1"> Portofolio</span>
        </h1>
        <h1 className="header__body--line-2" >
          My Skills are <span></span>
      </h1>
      </div>
    </>
  );
}

export default App;
