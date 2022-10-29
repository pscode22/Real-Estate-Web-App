import React from "react";
import '../../../styles/FilterSection.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { data } from "../../../utils/data";
import { DISPLAY_TYPE } from "../../../context/filters/displayOptions";
import { FILTER_VALUE_TYPE } from "../../../context/filters/filterValue";

export default function BathsAndBeds({filters}) {

    const { displayOptions : { optionState, optionDispatch } , setValues : { filterValueState, filterValueDispatch } } = filters;
  
    return(
      <>
      <div className='thirdBlock block'>                   {/* ----------- 3rd Filter ----------- */}
        <p className='location blockType'>Beds & Baths</p>
        <div className='blockContent thirdBlockContent' style={{display : 'flex', gap : '20px'}}>
          <div style={{textAlign : 'center'}}>
            <span>{filterValueState.beds}</span>+ Beds
            {!optionState.numOfBeds? 
              <FaAngleDown style={{paddingTop : '5px', cursor : 'pointer', color : '#7265ef'}}
               onClick={() => optionDispatch({type: DISPLAY_TYPE.NUM_OF_BEDS})}
              />
              :
              <FaAngleUp style={{paddingTop : '5px', cursor : 'pointer', color : '#7265ef'}}
                onClick={() => optionDispatch({type: DISPLAY_TYPE.NUM_OF_BEDS})}
              />
            }
            {
              optionState.numOfBeds && 
              <div className='dropDownTypes' style={{width : '50px'}}>
                <div> 
                  {data[2].items.map(item => (
                    <p className='dropDownListItems' 
                      key={item.value}
                      onClick={e => 
                        {
                          filterValueDispatch({type: FILTER_VALUE_TYPE.UPDATE_VALUE, payload : { key : "beds",  Value : e.target.innerText } });
                          optionDispatch({type: DISPLAY_TYPE.NUM_OF_BEDS});
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
  
          <div style={{textAlign : 'center'}}>
            {filterValueState.baths}+ Baths
            {!optionState.numOfBaths?
              <FaAngleDown style={{paddingTop : '5px', cursor : 'pointer', color : '#7265ef'}}
               onClick={() => optionDispatch({type: DISPLAY_TYPE.NUM_OF_BATHS})}
              />
              :
              <FaAngleUp style={{paddingTop : '5px', cursor : 'pointer', color : '#7265ef'}}
               onClick={() => optionDispatch({type: DISPLAY_TYPE.NUM_OF_BATHS})}
              />
            }
            {
              optionState.numOfBaths && 
              <div className='dropDownTypes' style={{width : '50px'}}>
                <div> 
                  {data[3].items.map(item => (
                    <p className='dropDownListItems' 
                      key={item.value}
                      onClick={e => 
                        {
                          filterValueDispatch({type: FILTER_VALUE_TYPE.UPDATE_VALUE, payload : { key : "baths", Value : e.target.innerText }}); 
                          optionDispatch({type: DISPLAY_TYPE.NUM_OF_BATHS});
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
        </div> 
  
      </div>
      </>
    )
}