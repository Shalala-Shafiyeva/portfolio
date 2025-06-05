import './assets/stylesheets/style.css';
import Header from './components/Header';
import BarsBox from './components/BarsBox';
import Home from './components/Home';
import Services from './components/Services';
import Resume from './components/Resume';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => (
  <>
    <Header />
    <BarsBox />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
);

export default App;
