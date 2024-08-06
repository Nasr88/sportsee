import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importer PropTypes

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(12); // Initialiser avec userId 12

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, // Valider la prop children
  };