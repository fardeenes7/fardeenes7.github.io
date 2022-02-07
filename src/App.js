import logo from './logo.svg';
import Maintenance from './maintenance/Maintenance';
import Home from './pages/Home';

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    return (
      <Home/>
    );
} else {
    // production code
    return (
        <Maintenance/>
    );
}
  
}

export default App;
