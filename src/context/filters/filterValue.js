import { data } from '../../utils/data';

const locations = data[5].states;
const properties = data[4].properties;

export const FILTER_VALUE_STATE = {
    min_Price : data[0].minPrice[0].value,
    max_Price : data[1].maxPrice[0].value,
    beds : data[2].items[0].name,
    baths : data[3].items[0].name,
    locationName : data[5].states[2].name,
    locationId : data[5].states[2].externalID,
    property_Type : properties[0].name,
    property_id : properties[0].value,
}

export const FILTER_VALUE_TYPE = {
    LOCATION_NAME : "LOCATION_NAME",
    UPDATE_VALUE : "UPDATE_VALUE",
    TEXT_INPUT : "TEXT_INPUT",
    PROPERTY_TYPE : "PROPERTY_TYPE"
}

export const postFilterValue = (state, { type , payload }) => {

    switch(type) {

        case FILTER_VALUE_TYPE.LOCATION_NAME:
            {
            
                let selectedLocation = locations.filter(item => item.name === payload.Value);
                let location_Name = selectedLocation[0].name;
                let location_ID = selectedLocation[0].externalID;

                return {
                   ...state,
                   locationName : location_Name,
                   locationId : location_ID,
                }
            }

        case FILTER_VALUE_TYPE.UPDATE_VALUE:
            {
                for(let i in state) {
                 if( i === payload.key) { //console.log(i)
                    return { 
                        ...state, 
                        [i] : payload.Value
                    }
                 } 
                }

                return state;
            }

        case FILTER_VALUE_TYPE.TEXT_INPUT:
            return {
                ...state,
                [payload.key] : payload.Value
            }   
        
        case FILTER_VALUE_TYPE.PROPERTY_TYPE:     
            {
                let property = properties.filter(item => item.name === payload.Value)
                let name = property[0].name;
                let id = property[0].value;

                return {
                    ...state,
                    property_Type : name,
                    property_id : id
                }
            }
            
        default:
        return state;     
    }
}    