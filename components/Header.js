import React from 'react';
import {NavLink} from 'reactstrap';
import Image from 'next/image';

const Header = () => {
  
  return (
    <div className="header">
               <div className="imgDiv">
                  <Image
                        alt='Logo img'
                        src="/logo.png"
                        width={80}
                        height={80}
                  />
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