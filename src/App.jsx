import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./assets/pages/main/Main";
import Contacts from "./assets/pages/contact/Contacts";
import Gallery from "./assets/pages/gallery/Gallery";
import Project from "./assets/pages/project/Project";
import Certification from "./assets/pages/certification/Certfication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/project" Component={Project} />
        <Route path="/certification" Component={Certification} />
        <Route path="/contact" Component={Contacts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
