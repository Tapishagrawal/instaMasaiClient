import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';

function App() {
  return (
    <div className="App">
      <h1>INSTA MASAI</h1>
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
