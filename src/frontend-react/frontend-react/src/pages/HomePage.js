import { React, useEffect, useState } from 'react';
import { TeamGrid } from '../components/TeamGrid';

import './HomePage.scss';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);
   
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`http://localhost:8080/team`);
                const data = await response.json();           
                setTeams(data);            
            };
            fetchAllTeams(); 
        }, []
    );

    return (
     <div className="HomePage">
        <div className="header-section">
            <h1 className="app-name">IPL Dashbord</h1>
        </div>
        <div className="team-grid">
            {teams.map(team => <TeamGrid teamName={team.teamName}/>)}
        </div>
      
    
    </div>
    );
}


