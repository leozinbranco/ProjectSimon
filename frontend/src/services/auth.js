import React, {useState} from 'react';

export const AuthContext = React.createContext({
  isLogged: false,
  userData: {},
  toggleLogged: () => {},
  saveUserData: () => {},
});

export const AuthProvider = props => {
  const [isLogged , setIsLogged ] = useState(false);
  const [userData, setUserData] = useState({});

  const toggleLogged = () => setIsLogged(!isLogged);
  const saveUserData = (user) => setUserData(user);

  return (
    <AuthContext.Provider value={{isLogged, toggleLogged, userData, saveUserData}}>
      {props.children}
    </AuthContext.Provider>
  );
};