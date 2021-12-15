import React from 'react';
import './App.css';
import Introduction from '../../../components/emir/src/component/profile/introduction';
import Photo from '../../../components/emir/src/component/profile/profilePhote';
import Fullname from '../../../components/emir/src/component/profile/fullname';
import Adress from '../../../components/emir/src/component/profile/adress';
import Sayari from './abc.jpg';
import Facebook from './facebook.png';
import YouTube from './youtube.png';
import github from './github.png';

function App() {
  return (
    <div className="container">
      <div className='card'>
        <div className='background'>
           <img className='Name'     src={Sayari} alt="abc"/>
        </div>
           <Introduction />
           <Photo />
           <Fullname />
           <Adress />     
      </div> 
      <div className='pics'>
        <a href='https://www.facebook.com/sayari.amir.921/'>
          <img className='face'  src={Facebook} alt="facebook" /></a>
          <a href='https://www.youtube.com/'>
            <img className='You' src={YouTube} alt="youtube"
          /></a>

          <a href='https://github.com/EmirSayari/React-check-point'>
            <img className='git' src={github} alt ="github"/>
          </a>
        
        </div>  
    </div>


       
  );
}

export default App;
