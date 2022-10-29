import React from 'react';
import FilterSection from './components/filterSection/FilterSection';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Property from './components/Property';
import './styles/App.css';
import Favorites from './components/Favorites';
import GlobalContext from './context/GlobalContext';


function App() {

  const [favIcon, setFavIcon] = React.useState(() => {
    if(sessionStorage.getItem('favIcon') !== null)
    {
      return JSON.parse(sessionStorage.getItem('favIcon'))
    }
    return true;
  })

  React.useEffect(() => {
    if(sessionStorage.getItem('props') === null || sessionStorage.getItem('props').length < 1) { console.log('bivhievionveriovho')
    sessionStorage.setItem('props', JSON.stringify([]));
    return; 
  }
  }, [])

  return (
    <div className="App">

      <GlobalContext>   

        <Header favIcon={favIcon} setFavIcon={setFavIcon}/>

        <div>
          <Routes>
            <Route path='/' element={ <> <FilterSection /> <Property /> </> }/>
            {/* <Route path='/' element={ <Property /> }/> */}
            <Route path='/favorites' element={ <Favorites /> }/>
          </Routes>
        </div>

      </GlobalContext>   

    </div>
  );
}

export default App;

