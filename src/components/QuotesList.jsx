import PropTypes from 'prop-types';

import QuoteItem from './QuoteItem'

function QuotesList( {QuotesData} ) {

    const htmlQuotes = QuotesData.map( (Quote, idx) => (
        <li key={idx}> 
        <QuoteItem quote={QuotesData.quote} Character={QuotesData.character}> 
        </QuoteItem>
        </li>
    ));

    return (
        <ul>
          {htmlQuotes}
        </ul>
    );
  }
  
  QuotesList.PropTypes = {
    QuotesData: PropTypes.array
  }

  
export default QuotesList;