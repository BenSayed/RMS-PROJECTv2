import React from 'react';
import "./Home.css" ;
import Section1 from './Section1/Section1';
import Section2 from './section-2/section2';
import Section3 from './section-3/section3';
import Section4 from './section-4/section4';
import Section5 from './Section-5/Section5';
const Home = () => {
  return (
    <div className='HomeAllSection'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      {/* <Section5/> */}
    </div>
  );
}

export default Home;
