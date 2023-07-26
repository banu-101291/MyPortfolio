import React from 'react';
import {Link} from 'react-scroll'
import './Header.css';



const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h2> Mernstack Develop<span>er</span></h2>
        </div>
        <div className='header__right'>
        <Link to='Home' smooth={true} duration={500}>
                <h3>Home</h3>
             </Link>
            
            <Link to='about' smooth={true} duration={500}>
                <h3>About Me</h3>
             </Link>
             <Link to='Skills' smooth={true} duration={500}>
                <h3>Skills</h3>
             </Link>
             <Link to='Projects' smooth={true} duration={500}>
                <h3>Projects</h3>
             </Link>
             
             <Link to='Contact' smooth={true} duration={500}>
                <h3>Contact</h3>
             </Link>
             <Link>
             <h3 className='header__rightbutton'>Join with me</h3>
               </Link>


        </div>
    </div>
  )
}

export default Header