import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './header.css';

//all components
import SideNav from './SideNav/sideNav';

const Header = (props) => {

  const navBars = () => {
         return(
             <div>
                 <FontAwesome name="bars" className="bars"
                   onClick={props.onOpenNav}
                 />
             </div>
         )
  }
  const logo = () => {
        return(
            <Link to="/" className="logo">
                <img className="logo img"alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }
    return(
        <header className='header'>
             <SideNav {...props}/>
             <div className='headerOpt'>
                 {navBars()}
                 {logo()}
            </div>
        </header>
        
    )
}

export default Header;