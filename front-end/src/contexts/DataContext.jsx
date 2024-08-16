import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importer PropTypes

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // je définit un state que je l'initialise à 12 que je le récupère dans une variable userId et que je ne peux le modifier 
  // qu'avec setUserId
  const [mocked, setMocked] = useState(true); // Initialiser avec la valeur true

  return (
    // UserContext.Provider : Le composant Provider du contexte rend les valeurs (mocked, setMocked) disponibles 
    // à tous les composants enfants qui consomment ce contexte.
    <DataContext.Provider value={{ mocked, setMocked }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired, // Valider la prop children
  };