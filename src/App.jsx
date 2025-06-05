import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import DarkModeContext from './context/DarkModeContext';
import { useContext } from 'react';
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`px-10 pt-5 pb-1 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
