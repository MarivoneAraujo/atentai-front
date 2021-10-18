import React, {useState} from "react"
import GlobalStateContext from "../contexts/GlobalStateContext";

const GlobalState = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const lightTheme = {
    background: "#e5e5e5",
  };
  
  const darkTheme = {
    background: "#202020",
  };

  const handleSwitchTheme = () => {
    if (isChecked) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  };


  const data = {isChecked, setIsChecked, lightTheme, darkTheme, handleSwitchTheme};

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
