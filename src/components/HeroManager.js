import React, { useState } from 'react';
import HeroA from './HeroA';
import HeroB from './HeroB';
import HeroC from './HeroC';
import HeroD from './HeroD';

const HeroManager = () => {
    const [currentHero, setCurrentHero] = useState('A');
  
    const changeHero = (hero) => {
      setCurrentHero(hero);
    };
  
    return (
      <>
        {currentHero === 'A' && <HeroA changeHero={changeHero} />}
        {currentHero === 'B' && <HeroB changeHero={changeHero} />}
        {currentHero === 'C' && <HeroC changeHero={changeHero} />}
        {currentHero === 'D' && <HeroD changeHero={changeHero} />}
      </>
    );
  };

export default HeroManager;
