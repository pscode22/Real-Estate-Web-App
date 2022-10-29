import React from 'react';
import FiltersProvider from './filters/Context';
import FavCardProvider from './favorites/favCard';
import DispalyPropProvider from './showProperties/propContext';

export default function GlobalContext({children}) {
  return (
    <>
      <FiltersProvider>
        <FavCardProvider>
          <DispalyPropProvider>
           { children }
          </DispalyPropProvider> 
        </FavCardProvider>
      </FiltersProvider>
    </>
  )
}
