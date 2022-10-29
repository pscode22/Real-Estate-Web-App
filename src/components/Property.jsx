import React from 'react';
import '../styles/Property.css';
import { GoVerified, GoUnverified } from 'react-icons/go'
import { IoBedOutline } from 'react-icons/io5';
import { TbBath } from 'react-icons/tb'
import  { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import { FavCardContext } from '../context/favorites/favCard';
import FavBtn, { favBtnClicked } from './FavButton';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { propertyContext } from '../context/showProperties/propContext';


export default function Property() {

  const favCards = React.useContext(FavCardContext);
  const { cardItems, setCardItems } = favCards;

  const showProperties = React.useContext(propertyContext);
  const { propertyList } = showProperties;

  //console.log(cardItems)

  const handleClick = (e, iconfill, setIconFill) => {
    return favBtnClicked(e, iconfill, setIconFill, cardItems, setCardItems, propertyList);
  }

  return (
    <>
      <div className='mainContainer'>

        { 
          propertyList.statusText === "OK"?
          propertyList.data.hits.length !== 0?
          <div className='cardContainer'>
            {
              propertyList.data.hits.map(item => (
              <div className="card" key={item.id} >

                <div style={{backgroundImage: `url(${item.coverPhoto.url})`, backgroundSize : 'cover', backgroundRepeat: 'no-repeat', width : '100%'}} className='img' loading="lazy" >
                  {/* <LazyLoadImage   src={item.coverPhoto.url}   alt="propertyImage" className="img" effect='blur' width={'100%'} /> */}
                </div>
 
                <span className="badge"> 
                  {item.isVerified? <GoVerified size={11}/> : <GoUnverified size={11}/>} {item.isVerified? "Verified" : "Not Verified"} 
                </span>
 
                <div className="infoSection" >
                  <div>
                    <div className="propertyInfo">
          
                      <p className="propertyPrice">AED {millify(item.price)}<span>/month</span></p>
          
                      <p className="propertyName">{item.title.length <= 40? item.title : item.title.slice(0,41)+'...'}</p> 
                      {/*  maximun 35-40 charcters for 2 line  */}
          
                      <FavBtn id={item.id} favCards={favCards} handleClick={handleClick} />
          
                    </div>

                    <div className="propertyAddress">
                      <p>
                       <span style={{fontWeight : 'bold'}}>Agency:-</span> {item.agency.name}
                      </p>
                    </div>
                    
                  </div>
    
                  <hr />
    
                  <footer className="cardFooter">
                    <p className='info'>
                      <IoBedOutline className='cardFooterIcons' /> {item.rooms} Bed{item.rooms >1? 's' : null}
                    </p>
    
                    <p className='info'>
                     <TbBath className='cardFooterIcons' /> {item.baths} Bathroom{item.baths >1? 's' : null}
                    </p>
    
                    <p className='info'>
                     <BsGridFill className='cardFooterIcons'/> {item.area.toFixed(2)} sqft
                    </p>
                  </footer>
    
                </div>
              </div>  
            ))}
          </div> 
          : 
          <div style={{display : "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", width : "100%", height : "320px"}}  className="errorMsg">
            <p style={{fontSize : "24px"}}>No matching results.</p>
            <p style={{fontWeight : "normal", textAlign : "center"}}>Edit or remove these filters for best results.</p>
          </div>
          :
          <>
          <div style={{display : "grid", placeItems : "center", width : "100%", height : "350px"}}  className="errorMsg">
            {propertyList.message}
            {/* Request failed with status code 404 */}
          </div>
          </>
        }
      </div>
    </>
  )
};