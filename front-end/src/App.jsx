import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import './assets/styles/main.scss';

const App = () => {
  return (
    <Router basename="/sportsee">
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/18" element={<Dashboard />} />
        <Route path="/user/12" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

