import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import './assets/styles/main.scss';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/user/:userId" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

