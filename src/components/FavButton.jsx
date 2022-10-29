import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

export default function FavBtn( { id, handleClick } ) { 
    const [iconfill, setIconFill] = React.useState(false);
  
    React.useEffect(() => { //sessionStorage.setItem('props', JSON.stringify([]));
      const getData = sessionStorage.getItem('props') === null? [] : JSON.parse(sessionStorage.getItem('props'));
  
      let bucketList =  [...new Set(getData.map(item => item.id))];
  
      if(bucketList.length >= 1) {
        bucketList.includes(id) && setIconFill(true);
      }
    } 
    ,[id])
    
    return(
      <>
      <button className={'favoriteBtn'} onClick={(e) => handleClick(e, iconfill, setIconFill)} id={id}>
       {iconfill? <FaHeart  className={'favIcon'}/> : <FiHeart  className={'favIcon'}/>} 
      </button>
      </>
    )
}

export const favBtnClicked = ( e, iconfill, setIconFill, cardItems, setCardItems, propertyList) => {

  const currentId = Number(e.currentTarget.getAttribute('id')); 
  const currentObj = propertyList.data.hits.filter(item => item.id === currentId);
  const getLocalList = [...JSON.parse(sessionStorage.getItem('props'))];
  
  return iconfill? 
  (setCardItems([...cardItems.filter(item => item.id !== currentId)]), 
   sessionStorage.setItem('props',JSON.stringify([...getLocalList.filter(item => item.id !== currentId)])),
   setIconFill(false)
  )
  : 
  (sessionStorage.setItem('props', JSON.stringify([])),
   setCardItems([...cardItems,...currentObj]),
   sessionStorage.setItem('props', JSON.stringify([...getLocalList,...currentObj])),
   setIconFill(true) 
  );

}