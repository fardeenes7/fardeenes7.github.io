import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maintenance from "./maintenance/Maintenance";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Resources from "./pages/Resources";

function App() {
    const isMaintenance = true;
    if (isMaintenance) {
        // dev code
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Maintenance />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </Router>
        );
    } else {
        // production code
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Maintenance />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog/" element={<Blog />} />
                    <Route path="/blog/:slug" element={<SingleBlog />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
