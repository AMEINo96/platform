import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CipherPortfolio from './pages/CipherPortfolio';
import ArchivistPortfolio from './pages/ArchivistPortfolio';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/cipher" element={<CipherPortfolio />} />
        <Route path="/portfolio/archivist" element={<ArchivistPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
