import React, {useState} from "react";

const AuthContext = React.createContext({
  userName: 'unset',
  userEmail: 'unset',
  isLoggedIn: false,
  userOrder: [],
  onLogin:() => {},
  onLogout:() => {}
});

export const AuthContextProvider = (props) => {

  const [userData, setUserData] = useState({userName: 'unset', userEmail: 'unset'});
  const [isLoggedIn, setIsLogIn] = useState(false);
  const [userOrder, setUserOrder] = useState([]);


  const loginChandler = () => {

  }

  const logoutChandler = () => {

  }

  return (
    <AuthContext.Provider
      value={{
        userName: userData.userName,
        userEmail: userData.userEmail,
        isLoggedIn: isLoggedIn,
        userOrder: userOrder,
        onLogin: loginChandler,
        onLogout: logoutChandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;

