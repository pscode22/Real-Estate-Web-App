import React from 'react';

export const FavCardContext = React.createContext();

const localData = sessionStorage.getItem('props') === null? [] : JSON.parse(sessionStorage.getItem('props'));
 
export default function FavCardProvider({children}) { //console.log(localData)

    const [cardItems, setCardItems] = React.useState([...localData]);

  return (
    <FavCardContext.Provider value={{cardItems,setCardItems}}>
      {children}
    </FavCardContext.Provider>
  )
}
