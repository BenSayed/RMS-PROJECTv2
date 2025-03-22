import React from 'react';
import "./MenuItems.css" ;
 import Banner from './Banar/banarMenu';
 import MainCourses from './Explore Menu/ExploreMenu';
import ExploreMenu from './Explore Menu/ExploreMenu';
   
const MenuItems = () => {
  return (
    <div className='MenuItems'>
 
 <Banner/>  
 <ExploreMenu/>
 
       </div>
  );
}

export default MenuItems;
