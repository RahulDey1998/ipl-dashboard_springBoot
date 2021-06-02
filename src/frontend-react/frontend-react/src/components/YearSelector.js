import { React } from 'react';
import { Link, useParams } from 'react-router-dom';

import './YearSelector.scss';

export const YearSelector = ({teamName, currentYear}) => {

    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear =  process.env.REACT_APP_DATA_END_YEAR; 

    for(let i = startYear ; i < endYear; i++) {
        years.push(i);
    }

    return(
        <ol className="YearSelector">
         { years.map(year => 
           <li>
               <div className={year == currentYear ? 'currentYear' : ''}>
               <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link> 
               </div>
               
          </li>)  }
        </ol>
    );
   
}