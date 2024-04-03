import { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  token: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || null);
  const navigate = useNavigate();

  const login = (token) => {
    setToken(token);
    sessionStorage.setItem('token', token);
    navigate('/new-investment');
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
