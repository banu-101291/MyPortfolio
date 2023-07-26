import React from 'react';
import { Element } from 'react-scroll';
import Skilling from './skill.jpg';
import { LinearProgress } from '@mui/material';
import './Skillcontainer.css';


const Skillcontainer = () => {
  return (
   <Element className='skillcontainer' id='skills'>
    <div className='skillContainer'>
    <div className='skillContainer__image'>
        <img src = {Skilling} alt="HGGGGGGGGGGGGGGG"/>

        </div>
   
   <div className='skillContainer__content'>
    <h2>SKILLSET</h2>
   
   <divi>
   
     <div className='skillContainer__slider skillContainer__slider1'>
     <h5>Javascript</h5>
    <LinearProgress variant='determinate' value={70}/>
   </div>
   </divi>
   <divi>
  
     <div className='skillContainer__slider skillContainer__slider2'>
     <h5>Bootstrap</h5>
    <LinearProgress variant='determinate' value={80}/>
   </div>
   </divi>
   <divi>
  
     <div className='skillContainer__slider skillContainer__slider3'>
     <h5>HTML</h5>
    <LinearProgress variant='determinate' value={90}/>
   </div>
   </divi>
   <divi>
   
     <div className='skillContainer__slider skillContainer__slider4'>
     <h5>React</h5>
    <LinearProgress variant='determinate' value={60}/>
   </div>
   </divi>
   <divi>
  
     <div className='skillContainer__slider skillContainer__slider5'>
     <h5>CSS</h5>
    <LinearProgress variant='determinate' value={90}/>
   </div>
   </divi>



   </div>
   </div>
   
    </Element> 
  )
}

export default Skillcontainer