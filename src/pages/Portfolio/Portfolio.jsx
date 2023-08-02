import React, { useEffect, useState } from 'react';
import ProjectTemplate from '../../components/Projects/ProjectTemplate';
import "./Portfolio.css";

import icons from '../../utilities/icons-services'
import { Button } from 'reactstrap';

export default function Resume() {
  const [ iconList, setIconList ] = useState(null);
  const [ activeIcon, setActiveIcon ] = useState('ALL');
  
  const handleClick = (e, iconName) => {
    console.log(iconName)
    setActiveIcon(iconName)
  }

  useEffect(() => {
    setIconList(icons)
  }, [icons]);

  return (
    <>
    <div className="borderOne">
    <div className="borderTwo">
    <div className="borderThree">
    <div className="borderFour">
    <div className="borderFive">
    <div className="SectionTitle">Portfolio</div> 
    <div id="portfolio" className="PortfolioContainer">
      <div className="FeaturedProjectContainer">
      </div>

      <div>
        <div className="FilterIconContainer">
        <Button className="button" onClick={(e) => handleClick(e, 'ALL')}>View All</Button>
        { iconList ? 
        iconList.map((i) => (
            <div className="FilterIconImageContainer">
              <img key={i.name} src={i.src} alt={i.name} onClick={(e) => handleClick(e, i.name)}/>    
            </div>
            ))
            :null }
        </div>
      </div>

      <div className="ProjectContainer">
        <ProjectTemplate activeIcon={activeIcon} />
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}