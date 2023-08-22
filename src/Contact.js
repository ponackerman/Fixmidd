import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout,  } from "./App";
import ReactDOM from "react-dom/client";
import "./App.css";


function Full() {
  return (
    <>
      <Layout />
      <div className="">
        <nav class="row">
          <div className="col-sm-3">
            <></>
          </div>

          <div className="col-sm-5">
            <Contact />
          </div>

          <div class="col-sm-4 ">
            <></>
          </div>
        </nav>
      </div>
      
    </>
  );
}

function Contact() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Game" emoji="❤️" color="gray" />
      <Skill skill="Esport" emoji="❤️" color="orange" />
      <Skill skill="Drink" emoji="❤️" color="yellow" />
      <Skill skill="Drunk" emoji="❤️" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายบุญยกร วณาไธสง</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชอบการเล่นเกมส์และ Esport 
      </p>
    </div>
  );
}

function Avatar() {
  return <img src="pon.jpg"  width="440" height="490" class="mx-auto d-block"></img>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

export default Full;