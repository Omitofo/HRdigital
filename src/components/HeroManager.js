import React, { useState } from 'react';
import HeroC from './HeroC';
import HeroD from './HeroD';
import Cookies from './Cookies';

const HeroManager = () => {
    const [currentHero, setCurrentHero] = useState('C');
  
    const changeHero = (hero) => {
      setCurrentHero(hero);
    };
  
    return (
      <>
        
        {currentHero === 'C' && <HeroC changeHero={changeHero} />}
        {currentHero === 'D' && <HeroD changeHero={changeHero} />}
        {currentHero === 'E' && <Cookies changeHero={changeHero} />}

        
      </>
    );
  };

export default HeroManager;
