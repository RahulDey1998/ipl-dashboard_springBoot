import { React, useEffect, useState } from 'react';
import { useParams, Link }  from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { YearSelector } from '../components/YearSelector';

import'./MatchPage.scss';


export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const  { teamName, year } = useParams();

    useEffect(
        () => { 
            const fetchMatches = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches/?year=${year}`);
                const data = await response.json();           
                setMatches(data);                 
            };
            fetchMatches(); 
        }, [year,teamName]
    );
    // if(matches.length == 0) {
    //     return (
    //         <h3>Match not found.</h3>
    //     );
    // }

    return (

        <div className="MatchPage">
            <div className="yearSelector">
                <div className="back_btn">
                    <Link to={`/teams/${teamName}`}>
                    <h1> &lt; Back </h1>
                    </Link> 
                </div>
                <h3>Select Year</h3>
               <YearSelector teamName={teamName} currentYear={year}/>
            </div>
          
            <div>
            <h1 className="page-heading">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailsCard key={match.id} teamName={teamName} match={match} />)
                }
            </div>
        </div>
    );
}


