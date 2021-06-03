import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TeamGrid } from '../components/TeamGrid';
import ipl_logo  from '../images/ipl_logo.png';

import './HomePage.scss';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);
   
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data = await response.json();           
                setTeams(data);            
            };
            fetchAllTeams(); 
        }, []
    );

    return (
     <div className="HomePage">
        <div className="header-section"> 
            <div className="ipl_logo">
               <Link to={'/'}>
                  <img className="ipl_logo" src={ipl_logo} ></img>
               </Link> 
            </div>
          <div>
            <h1 className="app-name">IPL Dashbord</h1>
          </div>
        </div>
        <div className="team-grid">
            {teams.map(team => <TeamGrid key={team.id} teamName={team.teamName}/>)}
        </div>
      
    
    </div>
    );
}


