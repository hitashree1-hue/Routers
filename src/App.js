import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import UserInfo from "./pages/UserInfo";
import NotFound from "./pages/NotFound";
import "./App.css"; 

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
