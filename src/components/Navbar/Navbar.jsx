import React, {useState} from 'react'
import {NavData} from './NavData';
import '../../styles/Navbar.scss'
const Navbar = () => {
    const[menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);

  return (
    <header className="navcontainer">
        <nav className='desktopnav container'>
              <span className='mainnav_logo'><img src='/images/logo.svg' alt='logo ' /></span>
              <div className='desktopnav_nav_container'>
              {NavData.map((item, index) => {
                  return (
                      <nav className='desktopnav_items'>
                          <span key={index} item={item.title}>{item.title}</span>
                      </nav>
                  )
              })}
              </div>
        </nav>


    <nav className='mobilenav container'>
        <div onClick={handleClick} className='toggle'>
              <span><img src='/images/logo.svg' alt='logo '/></span>
              <button className='nav_btn'>
                  {!menu ?
                      <img src='/images/icon-hamburger.svg' alt=' open menu' />
                      : <img src='/images/icon-close.svg' alt=' exit' />
                  }
              </button>
            </div>
          <div className={!menu ? 'hidden' : 'visible'}>
            {NavData.map((item, index)=>{
                return(
                    <div>
                        <span key={index} item={item.title} >{item.title}</span>
                    </div>
                )
            })}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
