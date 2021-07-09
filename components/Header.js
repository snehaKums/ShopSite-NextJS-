import React from 'react';
import {NavLink} from 'reactstrap';

const Header = () => {
  
  return (
    <div className="header">
               <div className="imgDiv">
                   <img src="/logo.png" width={80}
                    height={80} />
               </div>
                <NavLink href={'/'} className="headerLink" >
                    Home
                </NavLink>
                <NavLink href={'/about'} className="headerLink" >
                    About Us
                </NavLink>
                
    </div>
  );
}


export default Header;