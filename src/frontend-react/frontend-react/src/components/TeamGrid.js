import { React } from 'react';
import { Link } from 'react-router-dom';

import './TeamGrid.scss';

export const TeamGrid = ({teamName}) => {

    return (
        <div className="TeamGrid">
           <h1>
               <Link to={`/teams/${teamName}`}>
                  {teamName}
               </Link> 
            </h1>
        </div>
    )
    
}