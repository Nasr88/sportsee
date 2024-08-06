import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext'; // Importer le fournisseur de contexte
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import './assets/styles/main.scss';
import Switch from './components/switch/Switch'; // Ajoutez ce composant où vous avez besoin


const App = () => {
  return (
    <UserProvider>
    <Router basename="/sportsee">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:userId" element={<Dashboard />} />
      </Routes>
    </Router>
    </UserProvider>
  );
};

export default App;

