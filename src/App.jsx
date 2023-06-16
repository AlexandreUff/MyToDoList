import Header from './components/Header';
import MainHome from './components/MainHome';
import MainList from './components/MainList';
import MainAbout from './components/MainAbout';
import NavBar from './components/NavBar';
import './index.css';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route index element={<MainHome />} />
          <Route path='/list' element={<MainList />} />
          <Route path='/about' element={<MainAbout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
