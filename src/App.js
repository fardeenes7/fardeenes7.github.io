import logo from './logo.svg';
import Maintenance from './maintenance/Maintenance';

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    return (
      <div>
        <h1>Hello this is development enviroment</h1>
      </div>
    );
} else {
    // production code
    return (
      <div>
        <Maintenance/>
      </div>
    );
}
  
}

export default App;
