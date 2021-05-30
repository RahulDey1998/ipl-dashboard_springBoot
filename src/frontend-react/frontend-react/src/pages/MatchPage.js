import { React, useEffect, useState } from 'react';
import { useParams }  from 'react-router-dom';
import { MatchDetatilsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const  { teamName, year } = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches/?year=${year}`);
                const data = await response.json();           
                setMatches(data);                 
            };
            fetchMatches(); 
        }, []
    );
    if(matches.length == 0) {
        return (
            <h3>Match not found.</h3>
        );
    }

    return (
        <div className="MatchPage">
          <h1>Match Page</h1>
          {
              matches.map(match => <MatchDetatilsCard teamName={teamName} match={match} />)
          }
        </div>
    );
}


