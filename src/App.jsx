import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from './pages/Skills';
import Resumes from "./pages/Resume";

function App() {
  return (   
      <Router>
        <MainLayout >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resumes />} />
            <Route path="/*" element={<div className="text-center font-bold text-2xl m-6 bg-slate-200 h-40 p-8">** Page Not Found **<br/><br/>Please check your slug</div>} />
          </Routes>
        </MainLayout>
      </Router>
  );
}

export default App;