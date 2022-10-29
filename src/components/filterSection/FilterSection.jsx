import React from 'react';
import '../../styles/FilterSection.css';
import { filtersContext } from '../../context/filters/Context';
import Location from './childrens/Location';
import PriceBox from './childrens/PriceBox';
import BathsAndBeds from './childrens/BedsAndBaths';
import PropertyType from './childrens/PropertyType';
import axios from 'axios';
import { propertyContext } from '../../context/showProperties/propContext';


export default function FilterSection({ setLoading }) { 

  const filters = React.useContext(filtersContext);
  const {setValues : { filterValueState : { min_Price, max_Price, property_id, baths, beds, locationId }}} = filters;

  const showProperties = React.useContext(propertyContext);
  const { setPropertyList } = showProperties;

  const [priceList, setPriceList] = React.useState({
    minimum : false,
    maximum : false,
  })

  const handleClick = async (e) => {
    e.preventDefault();

    const urlParams = {
      locationExternalIDs: locationId,
      priceMin: min_Price,
      priceMax: max_Price,
      roomsMin: beds,
      bathsMin: baths,
      categoryExternalID: property_id,
    }

    setLoading(true);

    const data = await axios.get(`/.netlify/functions/function`, { params : { ...urlParams } })
    .then(res => { 
      setLoading(false); 
      return {...res};
    })
    .catch(err => { console.log(err) 
      setLoading(false); 
      return {...err, statusText : "ERROR"};
    });
     
    return setPropertyList({...data});
  }

  return ( 
    <>   
    <div className='filterSectionContainer' style={{position : 'relative'}}>
      <div className='filterSection'>

        <Location filters={filters}/>

        <PriceBox filters={filters} priceList={priceList} setPriceList={setPriceList} />        

        <BathsAndBeds filters={filters} />

        <PropertyType filters={filters} />

      </div>

      <div className='filterSearchBtnBox'>
        <button className='filterSearchBtn' onClick={(e) => handleClick(e)}>
          Search
        </button>
      </div>

    </div>  
    </>
  )
}