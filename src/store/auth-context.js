import React, {useEffect, useReducer, useState} from "react";

const AuthContext = React.createContext({
  userName: 'unset',
  userEmail: 'unset',
  isLoggedIn: false,
  userOrder: {orderList: [], status: 'NEW'},
  onAddProduct: () => {},
  onClearOrder: () => {},
  onSendOrder: () => {},
  onLogin: () => {},
  onLogout: () => {}
});

const userOrderReducer = (state, action) => {

  if (action.type === 'ADD_PRODUCT') {

    if (action.productId !== undefined && action.amount > 0 ) {

      const isSetProductOrder = state.orderList.findIndex((item) => {
        return item.productId === action.productId;
      });


      if (isSetProductOrder > -1) {
        state.orderList[isSetProductOrder].amount += action.amount;

        return (
          {
            orderList: [...state.orderList],
            status: 'ADD_PRODUCT_AMOUNT'
          }
        );
      }
      else {
        return (
          {
            orderList: [...state.orderList, {productId: action.productId, amount: action.amount}],
            status: 'ADD_PRODUCT'
          }
        );
      }
    }

  }

  if (action.type === 'CHANGE_AMOUNT') {

    const isSetProductOrder = state.orderList.findIndex((item) => {
      return item.productId === action.productId;
    });

    if (isSetProductOrder > -1) {
      state.orderList[isSetProductOrder].amount = +action.value;

      return (
        {
          orderList: [...state.orderList],
          status: 'ADD_PRODUCT_AMOUNT'
        }
      );
    }
    return (
      {
        orderList: [...state.orderList],
        status: 'CHANGE_PRODUCT_AMOUNT'
      }
    );
  }

  if (action.type === 'CLEAR_ORDER') {

    return {
      orderList: [],
      status: 'ORDER_CLEARED'
    };
  }

  if (action.type === 'ADD_ORDER_LIST') {
    let orderList = [];

    if(action.value) {
      orderList = action.value;
    }

    return { orderList: orderList, status: 'ORDER_CLEARED'};
  }

  if (action.type === 'SEND_ORDER') {

    return {
        orderList: [],
        status: 'ORDER_SENT'
      };
  }

  return {
      orderList: [],
      status: state.status
    };
}

export const AuthContextProvider = (props) => {

  const [userData, setUserData] = useState({userName: 'unset', userEmail: 'unset'});
  const [isLoggedIn, setIsLogIn] = useState(false);
  const [userOrder, dispatchOrder] = useReducer(userOrderReducer, {orderList: [], status: "NEW"}, undefined);

  useEffect(() => {
    const localStorageUserOrder = localStorage.getItem('userOrder');

    if (localStorageUserOrder) {
      dispatchOrder({type: 'ADD_ORDER_LIST', value: JSON.parse(localStorageUserOrder)});
    }
  }, []);

  useEffect(() => {
    const addToLocalStorage = setTimeout( () => {
      localStorage.setItem('userOrder', JSON.stringify(userOrder.orderList));
    },500);

    return () => {
      clearTimeout(addToLocalStorage);
    }
  }, [userOrder]);



  const loginChandler = () => {

  }

  const logoutChandler = () => {

  }

  const addProductChandler = (action) => {
    dispatchOrder(action);
  }
  const changeOrderChandler = (action) => {
    dispatchOrder(action);
  }

  const clearOrderChandler = () => {
    dispatchOrder({type: 'CLEAR_ORDER'});
  }

  const sendOrderChandler = () => {
    dispatchOrder({type: 'SEND_ORDER'});
  }


  return (
    <AuthContext.Provider
      value={{
        userName: userData.userName,
        userEmail: userData.userEmail,
        isLoggedIn: isLoggedIn,
        userOrder: userOrder,
        onAddProduct: addProductChandler,
        onChangeOrder: changeOrderChandler,
        onClearOrder: clearOrderChandler,
        onSendOrder: sendOrderChandler,
        onLogin: loginChandler,
        onLogout: logoutChandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;

