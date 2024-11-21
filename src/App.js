import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Project/Projects';
import LayoutBody from './components/Layout/Body';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<LayoutBody />} />
      </Routes>
    </Router>
  );
}

export default App;
