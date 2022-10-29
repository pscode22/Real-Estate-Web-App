import React from 'react';
import '../styles/Favorites.css';
import { FavCardContext } from '../context/favorites/favCard';
import FavBtn, { favBtnClicked } from './FavButton';
import { GoVerified, GoUnverified } from 'react-icons/go'
import { IoBedOutline } from 'react-icons/io5';
import { TbBath } from 'react-icons/tb'
import  { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import { propertyContext } from '../context/showProperties/propContext';

export default function Favorites() { 

  const [value, setValue] = React.useState('');

  const favCards = React.useContext(FavCardContext);
  const { cardItems, setCardItems } = favCards;
  
  const showProperties = React.useContext(propertyContext);
  const { propertyList } = showProperties;

  const handleClick = (e, iconfill, setIconFill) => {
    return favBtnClicked(e, iconfill, setIconFill, cardItems, setCardItems, propertyList);
  }

  const [favData, setFavData] = React.useState([]);

  React.useEffect(() => {
    setFavData([...cardItems]);
  }, [cardItems])

  const handleChange = e => {
    setValue(e.target.value);
    const query = (e.target.value).toUpperCase();
    let getData = [...cardItems];
    
    getData = getData.filter(item => {
      return (
        millify(item.price).indexOf(query) !== -1 ||
        item.title.toUpperCase().indexOf(query) !== -1
      )
    })
    setFavData([...getData]);
    return;
  }

  return (
    <>
      <div className='favMainContainer'>

        <div className='pageHeader'>
         <div className='searchSection'>
            <input type="search" name="searchProperty" className='searchBar' value={value} onChange={handleChange} placeholder='Search by Title or Price'/>
            <button className='cancelSearch'>Cancel</button>
         </div>
        </div>

        { 
          favData.length !== 0?

          <div className='favCardContainer'>
            {
              favData.map(item => (
                <div className="card" key={item.id} >
  
                  <div style={{backgroundImage: `url(${item.coverPhoto.url})`, backgroundSize : 'cover', backgroundRepeat: 'no-repeat', width : '100%'}} className='img'>
                    {/* <LazyLoadImage  src={item.coverPhoto.url}   alt="propertyImage" className="img" effect='blur' width={'100%'} /> */}
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
              ))
            }
          </div>

          :

          <div style={{display : "flex", alignItems : "center", justifyContent: "center"}}>
            <p style={{fontWeight : "500",fontSize : "20px"}}>Favorite Property Not Found.</p>
          </div>  
        }

      </div>
    </>
  )
}
