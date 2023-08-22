import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button,  Image } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";


export function Layout() {
  return (
    <nav className="bg-warning p-2 md-3">
  <img src="tesla.png" class="rounded-circle" alt="Cinque Terre" width="25" height="25"></img>
  <NavLink
    to="/"
    className="link px-2"
    style={({ isActive }) => {
      return {
        textDecoration: isActive ? "none" : "underline",
      };
    }}
  >
    หน้าเเรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-1"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-1"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทํา
      </NavLink>
    </nav>
  );
}

function Foodlist(props) {
  return (
    <div className="column text-center">
      <Image clessName=""src={props.img} width="50%" />
      <h4 className="mitr">{props.name}</h4>
      <p className="Itim">{props.desc}</p>
      <Button className="md-3 itim bg-secondary">ดูวิธีทำ</Button>
    </div>
  );
}


function Footer() {
  return (
    <div className="text-Left bg-warning link sarabun">
      2023 @ Developed Boonyakon W.
    </div>
  );
}

function Index() {
  return (
    <>
     <Layout />
     <h4 className="text-decoration-underline text-center mt-3">
        วิธีทำอาหารญี่ปุ่นยอดฮิต
      </h4>
      <div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <img src="ppp.webp" width="180" height="150"
      class="mx-auto d-block" ></img>
    <Foodlist        
          name="ข้าวหน้าเนื้อดงบุร"
          desc="สูตร ข้าวหน้าเนื้อ สไตล์ เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง Chef Bas Fast Food ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ เลยก็ว่าได้ โดยเฉพาะในส่วนของซอสผัด ที่ใช้น้ำซุปดาชิ มิริน และ ซอสโชยุ เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ ทำตามสูตรนี้ได้เลย รับรองว่า ไม่ผิดหวัง"
        />
    </div>
    <div class="col-sm-4">
      <img src="ppp1.webp" class="rounded-circle" alt="Cinque Terre" width="180" height="150"
      class="mx-auto d-block"></img>
    <Foodlist
          name="ราเมนหมูชาชู"
          desc="ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชู ยิ่งอร่อย ซึ่งถ้าหากใครอยากทำทานเองที่บ้าน ไม่ต้องไปกินที่ร้าน ชามละ 200 – 300 บาท แล้วละก็ ทำตามสูตรนี้ได้เลย รับรองว่า อร่อยไม่แพ้กัน"
        />
    </div>
    <div class="col-sm-4">
      <img src="ppp2.webp" class="rounded-circle" alt="Cinque Terre" width="180" height="150"
      class="mx-auto d-block"></img>
    <Foodlist
          name="ยากิโซบะ"
          desc="เส้นยากิโซบะ เนื้อหมู กะหล่ำปลี แครอท ถั่วงอก ผัดคลุกเคล้าเข้าด้วยกัน ด้วยซอสแบบโฮมเมด ให้รสชาติแบบที่เราคุ้นเคย โดยสูตรนี้เป็น เมนูอาหารญี่ปุ่น แบบที่แม่บ้านชาวญี่ปุ่นทำกันเลยทีเดียว บอกต่อจากช่อง Just One Cookbook มาดูกันว่า ยากิโซบะแบบดั้งเดิมจากญี่ปุ่น มีวิธีการทำอย่างไร"
        />
    </div>
  </div>
</div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p- my-4 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}







export default App;