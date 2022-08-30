import React, { createContext, useState } from 'react'; // useReducer

export const GetDirectionGlobalContext = createContext();
export const SetDirectionGlobalContext = createContext();

export const GlobalProvider = (props) => {
  // const [panelIndex, setPanelIndex] = useState(40);
  const [pastPanelIndex, setPastPanelIndex] = useState(0);
  const [theDirection, setTheDirection] = useState(77);

  const [isNewDirection, setIsNewDirection] = useState(false);
  const [pastDirection, setPastDirection] = useState(1);

  // const setDirection = (chosenIndex) => {
  //   (chosenIndex > pastPanelIndex)
  //     ? setTheDirection(0) : setTheDirection(1);
  //   setPastPanelIndex(chosenIndex);
  // }
  const checkDirection = (chosenDirection) => {
    chosenDirection === pastDirection
    ? setIsNewDirection(false)
    : setIsNewDirection(true)
  }

  return(
    // <GetDirectionGlobalContext.Provider value={panelIndex}>
    <GetDirectionGlobalContext.Provider value={isNewDirection}>
      {/* <GlobalContext.Provider value = {{ setPanelIndex }}> */}
      <SetDirectionGlobalContext.Provider value = {{ checkDirection }}>
          {props.children}
      </SetDirectionGlobalContext.Provider>
    </GetDirectionGlobalContext.Provider>
  )
}
