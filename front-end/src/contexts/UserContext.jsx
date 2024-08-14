import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importer PropTypes

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // je définit un state que je l'initialise à 12 que je le récupère dans une variable userId et que je ne peux le modifier 
  // qu'avec setUserId
  const [userId, setUserId] = useState(12); // Initialiser avec userId 12

  return (
    // UserContext.Provider : Le composant Provider du contexte rend les valeurs (userId et setUserId) disponibles 
    // à tous les composants enfants qui consomment ce contexte.
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, // Valider la prop children
  };