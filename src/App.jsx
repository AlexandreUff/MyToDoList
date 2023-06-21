import Header from "./components/Header";
import MainHome from "./components/pages/MainHome";
import MainList from "./components/pages/MainList";
import MainAbout from "./components/pages/MainAbout";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes>
          <Route index element={<MainHome />} />
          <Route path="/list/:listId" element={<MainList />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="*" element={<MainHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
