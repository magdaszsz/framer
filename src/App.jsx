import "./App.css";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import SingleProject from "./pages/SingleProject";
import List from "./pages/List";
import { AnimatePresence } from "framer-motion";

function App() {
   const location = useLocation();
  return (
    <div className="app-container">
      
        <aside>
          <Nav />
        </aside>

        <main>
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />}>
                <Route path="list" element={<List />} />
                <Route path="/projects/:id" element={<SingleProject />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </main>
      
    </div>
  );
}

export default App;
