import { React } from 'react';

export const MatchDetatilsCard = ({match}) => {
    if(!match) return null;
  return (
    <div className="MatchDetatilsCard">
       <h1>Team Name</h1>
       <h3>Latest Matches</h3>
       <h4>{match.team1} vs {match.team2}</h4>
    </div>
  );
}


