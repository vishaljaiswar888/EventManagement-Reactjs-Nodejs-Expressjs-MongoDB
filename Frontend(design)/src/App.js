import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { AdminLogin } from "./components/AdminLogin";
import { EventMangement } from "./components/EventMangement";
import { SignUp } from "./components/SignUp";
import { EventList } from "./components/EventList";
import {Editevent} from "./components/Editevent";
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigationbar></Navigationbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/eventmanagement" element={<EventMangement />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/EventList" element={<EventList />}></Route>
        <Route path="/edit/:artistName" element={<Editevent />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
