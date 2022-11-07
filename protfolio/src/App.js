import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Nav />
        <SideBar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/skills" element={<h1>Skills</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
