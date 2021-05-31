import { React } from 'react';
import { Link } from 'react-router-dom';

import './MatchDetailsCard.scss';

export const MatchDetailsCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = (teamName === match.team1) ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = (teamName === match.matchWinner);

  return (
    <div className={isMatchWon ? 'MatchDetailsCard won-card' : 'MatchDetailsCard lost-card'}>
      <div>
        <span className="vs">vs</span>
        <h1><Link to={otherTeamRoute}> {otherTeam} </Link></h1>
        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">{match.venue}</h3>
        <h3 className="match-winner">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
      </div>

      <div className="additional-details">
        <h3>First Inings</h3>
        <p>{match.team1}</p>
        <h3>Second Inings</h3>
        <p>{match.team2}</p>
        <h3>Man of the match</h3>
        <p>{match.playerOfTheMatch}</p>
        <h3>Second Inings</h3>
        <p>{match.team2}</p>
        <h3>Umpires</h3>
        <p>{match.umpire1} , {match.umpire2} </p>
      </div>
    </div>
  );
}


