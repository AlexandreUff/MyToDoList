import Header from './components/Header';
import MainHome from './components/Main';
import NavBar from './components/NavBar';
import './index.css';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <NavBar />
      <MainHome />
    </div>
  );
}

export default App;
