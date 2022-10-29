import React from'react';
import { rentalData } from '../../utils/rentedPropData';

export const propertyContext = React.createContext();

export default function DispalyPropProvider({children}) {

    const [ propertyList, setPropertyList ] = React.useState({data : { hits : rentalData.hits }, statusText : "OK"});

  return (
    <propertyContext.Provider value={{propertyList, setPropertyList}}>
      {children}
    </propertyContext.Provider>
  )
}
