import React from 'react';
import '../styles/Header.css';
import { TbSmartHome } from 'react-icons/tb';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header({favIcon, setFavIcon}) {

    const handleClick = () => {
      return favIcon? (setFavIcon(false), sessionStorage.setItem('favIcon',false)) : (setFavIcon(true), sessionStorage.setItem('favIcon',true))
    }

  return (
    <> 
    <div className='header'>

       <div style={{width : 'fit-content'}} className='leftSideBox'>
            <p style={{display : 'flex', alignItems : 'center' , width : 'fit-content'}}>
                <TbSmartHome className='logo'/> 
                {/* <RiHomeSmile2Fill size={42} style={{color : '#7268ED'}} />
                <RiHomeSmileFill size={40} style={{color : '#7268ED'}} /> */}
                <span className='name'>Estatery</span>
            </p>
       </div>

       <div className='heading' >
        <p>
          Rent a Property
        </p>
       </div>

       <div style={{display: 'flex' , flexDirection : 'row-reverse'}}>
                {favIcon? 
                  <Link to={'/favorites'}> <button  className='heartIconBtn' onClick={handleClick}> <FaHeart className='heartIcon'/>  </button> </Link>
                  : 
                  <Link to={'/'}> <button  className='goBackBtn' onClick={handleClick}><RiArrowGoBackFill className='goBackIcon' /> </button> </Link>
                }
        </div>
    </div>

    {/* <div className='headingMobile' >
        <p>
           Search Properties To Rent
        </p>
       </div> */}
    </>
  )
}
