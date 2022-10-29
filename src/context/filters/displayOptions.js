const INITIAL_STATE = {
    locationList : false,
    priceBox : false,
    numOfBeds : false,
    numOfBaths : false,
    propertyType : false,
  }
  
  const DISPLAY_TYPE = {
    LOCATION_LIST : "LOCATION_LIST",
    PRICE_BOX : "PRICE_BOX",
    NUM_OF_BEDS : "NUM_OF_BEDS",
    NUM_OF_BATHS : "NUM_OF_BATHS",
    PROPERTY_TYPE_LIST : "PROPERTY_TYPE_LIST",
  }
  
  const postOptions  = (state, action) => {
    switch(action.type) {
  
        case DISPLAY_TYPE.LOCATION_LIST:
            return {
                ...state,
                locationList : !state.locationList
            }
  
        case DISPLAY_TYPE.PRICE_BOX:
            return {
                ...state,
                priceBox : !state.priceBox
            }
        
        case DISPLAY_TYPE.NUM_OF_BEDS:
            return {
                ...state,
                numOfBeds : !state.numOfBeds
            }
            
        case DISPLAY_TYPE.NUM_OF_BATHS:
            return {
                ...state,
                numOfBaths : !state.numOfBaths
            }    
            
        case DISPLAY_TYPE.PROPERTY_TYPE_LIST:
            return {
                ...state,
                propertyType : !state.propertyType
            } 
        
        default:
        return state;
  
    }
  }
  
  export { postOptions, INITIAL_STATE, DISPLAY_TYPE };