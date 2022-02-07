import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Maintenance from './maintenance/Maintenance';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';

function App() {
  const isMaintenance = false;
  if (isMaintenance) {
    // dev code
    return (
      <Maintenance/>
      
    );
} else {
    // production code
    return (
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/' element={<Blog/>} />
        <Route path='/blog/:slug' element={<SingleBlog/>} />
      </Routes>
    </Router>
    );
}
  
}

export default App;
