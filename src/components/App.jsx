import { useState } from 'react';

import '../scss/App.scss';

import Header from './Header';
import Filter from './Filter';
import QuotesList from './QuotesList';

import QuotesData from '../data/QuotesData.json';

function App() {
  
  const [ Quotes ] = useState( QuotesData );

  const [ FilterQuotes, setFilterQuotes] = useState('');

  const handelFilterQuotes = (filterValue) => {
    setFilterQuotes(filterValue)
  }


  return (
    <div>
      <Header></Header>
      <main>
        <Filter></Filter>

        <section>
          <QuotesList></QuotesList>
        </section>
      </main>
    </div>
  )
}

export default App
