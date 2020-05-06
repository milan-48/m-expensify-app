import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


//'##,##,##0'

// numeral.register('locale', 'en_IN', {
//     delimiters: {
//         thousands: ',',
//     },
//     abbreviations: {
//         thousand: 'k',
//         million: 'm',
//         billion: 'b',
//         trillion: 't'
//     },
    
//     currency: {
//         symbol: '₹'
//     }
// });
//  numeral.locale('en_IN');

const ExpenseListItem = ({  id, description, amount, createdAt }) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>   
        <p>
            Rs.{numeral(amount).format('##,##,##0')}
             - 
            {moment(createdAt).format('MMM Do, YYYY ')}
        </p>
        </div>
);

export default (ExpenseListItem);