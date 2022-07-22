import './App.css';
import Footer from './Components/Pages/Footer';
import Navbar from './Components/Pages/Navbar';
import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
