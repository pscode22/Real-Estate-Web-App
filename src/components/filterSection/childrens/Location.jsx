import React from "react";
import '../../../styles/FilterSection.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { data } from "../../../utils/data";
import { DISPLAY_TYPE } from "../../../context/filters/displayOptions";
import { FILTER_VALUE_TYPE } from "../../../context/filters/filterValue";


export default function Location({filters}) {

    const { displayOptions : { optionState, optionDispatch } , setValues : { filterValueState, filterValueDispatch } } = filters;
  
    return (
      <>
      <div className='firstBlock block'>                 {/* ----------- 1st Filter ----------- style={{width : '40%', top : '30px'}} */}
        <p className='location blockType'>Location</p>
        <p className='blockContent locationName' >
         {filterValueState.locationName}
        </p>
        <button className='dropDownIconBtn' name='propertyTypeBtn' 
          onClick={() => optionDispatch({type: DISPLAY_TYPE.LOCATION_LIST })} 
          style={{marginTop : '30px', right : '30px'}}
          >
          {!optionState.locationList? <FaAngleDown style={{margin : '3px 4px 1px 4px'}}/> : <FaAngleUp style={{margin : '3px 4px 1px 4px'}}/>}
        </button>
      
        {
          optionState.locationList && 
          <div className='dropDownTypes'>
            <div> 
              {data[5].states.map(item => (
                  <p className='dropDownListItems' 
                    key={item.isoCode}
                    onClick={e => 
                      {
                        filterValueDispatch({type: FILTER_VALUE_TYPE.LOCATION_NAME, payload : { Value : e.target.innerText }}); 
                        optionDispatch({type: DISPLAY_TYPE.LOCATION_LIST});
                        return;
                      }
                    }
                   >{item.name}
                  </p>
                )
              )}
            </div>
          </div>
        }
      </div>
      </>
    )
}