import React from "react";
import '../../../styles/FilterSection.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import millify from 'millify';
import { data } from "../../../utils/data";
import { DISPLAY_TYPE } from "../../../context/filters/displayOptions";
import { FILTER_VALUE_TYPE } from "../../../context/filters/filterValue";

export default function PriceBox({filters, priceList, setPriceList}) {

    const { displayOptions : { optionState, optionDispatch } , setValues : { filterValueState, filterValueDispatch } } = filters;

    const handleChange = (e) => { console.log('rf')
      const key = e.target.name;
      const input = (e.target.value).replace(/[a-zA-Z]|\s|[,]/gm,''); 
      
      return input !== ''? filterValueDispatch({type : FILTER_VALUE_TYPE.TEXT_INPUT, payload : { key : [key], Value : [input] }}) : null ;
    }
  
    return(
      <>
      <div className='secondBlock block'>                {/* ----------- 2nd Filter ----------- */}
        <p className='location blockType'>Price</p>
        <p className='blockContent secondBlockContent'>{millify(filterValueState.min_Price)} AED - {millify(filterValueState.max_Price)} AED</p>
        <button className='dropDownIconBtn' name='priceBtn' onClick={() => optionDispatch({type: DISPLAY_TYPE.PRICE_BOX})}>
          {!optionState.priceBox? <FaAngleDown style={{margin : '3px 4px 1px 4px'}}/> : <FaAngleUp style={{margin : '3px 4px 1px 4px'}}/>}
        </button>
  
        { optionState.priceBox && 
          <div className='pricingBox'>
            <div style={{display : 'flex', justifyContent : 'space-between', position : 'relative'}}>
              <input type="text" value={filterValueState.min_Price} name='min_Price' onChange={handleChange} 
                onFocus={() =>setPriceList({...priceList, minimum : !priceList.minimum})} 
                className='priceInput' placeholder='No Min' maxLength={16}
              /> 
              {
               priceList.minimum && 
                <div className='dropDownTypes' style={{width : '40%', top : '30px'}}>
                  <div> 
                   {data[0].minPrice.map(item => (
                     <p className='dropDownListItems' 
                       key={item.value}
                       onClick={e => 
                         { console.log( (e.target.innerText).replace(',',''))
                           filterValueDispatch(
                           { type : FILTER_VALUE_TYPE.UPDATE_VALUE,
                             payload : { key : "min_Price", Value : (e.target.innerText).replace(',','') }
                           }); 
                           setPriceList({...priceList, minimum : !priceList.minimum});
                           return;
                         }
                       }
                      >{item.name}
                     </p>
   
                    ))}
                  </div>
                </div>
              }
  
              <p style={{marginTop: '3px'}}>-</p>
  
              <input type="text" value={filterValueState.max_Price} name='max_Price' onChange={handleChange} 
                onFocus={() =>setPriceList({...priceList, maximum : !priceList.maximum})}  
                className='priceInput' placeholder='No Max' maxLength={16}
              />
              {
                priceList.maximum && 
                <div className='dropDownTypes' style={{width : '40%', top : '30px', right : 0}}>
                  <div> 
                    {data[1].maxPrice.map(item => (
                      <p className='dropDownListItems' 
                        key={item.value}
                        onClick={e => 
                          { 
                            filterValueDispatch(
                            { type : FILTER_VALUE_TYPE.UPDATE_VALUE,
                              payload : { key : "max_Price", Value : (e.target.innerText).replace(',','') }
                            });
                            setPriceList({...priceList, maximum : !priceList.maximum});
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
  
            <div className='boxFooter'>
              <button className='doneBtn' name='dPriceBtn' onClick={() => optionDispatch({type: DISPLAY_TYPE.PRICE_BOX})}>
                Done
              </button>
            </div>
          </div> 
        }
      </div>
      </>
    )
}