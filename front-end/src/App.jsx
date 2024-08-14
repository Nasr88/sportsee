import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext'; // Importer le fournisseur de contexte
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import './assets/styles/main.scss';
import Community from './pages/community/Community';
import Settings from './pages/settings/Settings';


const App = () => {
  return (
    // ajouter userprovider permet d'utiliser le UserContext partout dans l'application (dans tous les composants enfants).
    <UserProvider>
      <Router basename="/sportsee">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user/:userId" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

