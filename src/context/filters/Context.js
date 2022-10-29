import React from 'react';
import { postOptions, INITIAL_STATE } from '../filters/displayOptions';
import { postFilterValue, FILTER_VALUE_STATE } from './filterValue';

export const filtersContext = React.createContext();  

export default function FiltersProvider({children}) {

  const [state, dispatch] = React.useReducer( postOptions, INITIAL_STATE );

  const [ filterValueState, filterValueDispatch ] = React.useReducer( postFilterValue, FILTER_VALUE_STATE );

  return (
    <filtersContext.Provider 
      value={
        { displayOptions : { optionState: state, optionDispatch: dispatch },
          setValues : { filterValueState, filterValueDispatch } 
        }
      }>
      {children}
    </filtersContext.Provider>
  )
};