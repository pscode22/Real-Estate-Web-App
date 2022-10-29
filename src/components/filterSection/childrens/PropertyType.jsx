import React from "react";
import '../../../styles/FilterSection.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { data } from "../../../utils/data";
import { DISPLAY_TYPE } from "../../../context/filters/displayOptions";
import { FILTER_VALUE_TYPE } from "../../../context/filters/filterValue";


export default function PropertyType({filters}) {

    const { displayOptions : { optionState, optionDispatch } , setValues : { filterValueState, filterValueDispatch } } = filters;
  
    return (
      <>
      <div className='fourthBlock block'>                   {/* ----------- 4th Filter ----------- */}
        <p className='location blockType'>Property Type</p>
        <p className='blockContent fourthBlockContent' style={{marginLeft : '1px'}}>{filterValueState.property_Type}</p>
  
        <button className='dropDownIconBtn' name='propertyTypeBtn' 
          onClick={() => optionDispatch({type: DISPLAY_TYPE.PROPERTY_TYPE_LIST})} 
          style={{marginTop : '30px', right : '30px'}}
          >
          {!optionState.propertyType? <FaAngleDown style={{margin : '3px 4px 1px 4px'}}/> : <FaAngleUp style={{margin : '3px 4px 1px 4px'}}/>}
        </button>
            
        {
          optionState.propertyType && 
  
          <div className='dropDownTypes'>
            <div>
              {data[4].properties.map(item => (
                <p className='dropDownListItems' 
                  key={item.value}
                  onClick={e => 
                    {
                      filterValueDispatch({type: FILTER_VALUE_TYPE.PROPERTY_TYPE, payload : { Value : e.target.innerText }}); 
                      optionDispatch({type: DISPLAY_TYPE.PROPERTY_TYPE_LIST});
                      return;
                    }
                  }
                 >{item.name}
                </p>
  
              ))}
            </div>
          </div>
        }
      </div>
      </>
    )
}