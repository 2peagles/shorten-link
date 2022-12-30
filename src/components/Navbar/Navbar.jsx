import React, {useState} from 'react'
import {NavData} from './NavData';
import '../../styles/Navbar.scss'
const Navbar = () => {
    const[menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);

  return (
    <div className="navcontainer">
        <div className='desktopnav container'>
              <span><img src='/images/logo.svg' alt='logo ' /></span>
              <div className='desktopnav'>
              {NavData.map((item, index) => {
                  return (
                      <nav className='desktopnav_items'>
                          <span key={index} item={item.title} className='items'>{item.title}</span>
                      </nav>
                  )
              })}
              </div>
        </div>


    <div className='mobilenav container'>
        <div onClick={handleClick} className='toggle'>
              <span><img src='/images/logo.svg' alt='logo '/></span>
              <div>
                  {!menu ?
                      <img src='/images/icon-hamburger.svg' alt=' open menu' />
                      : <img src='/images/icon-close.svg' alt=' exit' />
                  }
              </div>
            </div>
          <div className={!menu ? 'hidden' : 'visible'}>
            {NavData.map((item, index)=>{
                return(
                    <nav>
                        {/* <span><img src='/images/logo.svg' alt='logo '/></span> */}
                        <span key={index} item={item.title}>{item.title}</span>
                    </nav>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Navbar
