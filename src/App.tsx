import { Route, Routes } from "react-router-dom";
import { NavBarSection } from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import AppDownload from "./pages/AppDownload";

function App() {
  return (
    <>
      <NavBarSection />
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<AppDownload />} path="/appdownload" />
      </Routes>
    </>
  );
}

export default App;
