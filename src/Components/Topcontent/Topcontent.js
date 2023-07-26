import React from 'react';
import { Link } from 'react-scroll';
import './Topcontent.css';

const Topcontent = () => {
  return (
    <div className='topcontent'>
       <div className="topcontent__Container" >
        <h1>Sharmila banu.S </h1>
        <p>A professional Web and Application Developer</p>
        <a href="www.google.com">
            <button className='topcontent__downloadbutton'>Download CV</button>
        </a>
        <Link to = "projects" smooth="true" duration="500">
            <button className='topcontent__workbutton' >My work</button>
        </Link>

       </div>
        
        </div>
  )
}

export default Topcontent