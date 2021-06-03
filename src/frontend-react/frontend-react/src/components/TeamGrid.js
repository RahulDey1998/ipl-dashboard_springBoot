import { React } from 'react';
import { Link } from 'react-router-dom';

import './TeamGrid.scss';

export const TeamGrid = ({teamName}) => {

    return (
        <Link to={`/teams/${teamName}`}>
            <div className="TeamGrid">
             <h1>
                {teamName}
             </h1>
            </div>
        </Link>
    )
    
}