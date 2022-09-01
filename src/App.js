import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className='d-flex' style={{height: '90vh'}}>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
