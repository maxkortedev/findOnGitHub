import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { CHANGE_ALERT, CLEAR_ALERT } from "../types";

function AlertState(props) {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const changeAlert = (msg, alertType) => {
    dispatch({ type: CHANGE_ALERT, payload: { msg, alertType } });
  };

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  return (
    <AlertContext.Provider value={{ alert: state, changeAlert, clearAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;
