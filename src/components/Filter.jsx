function Filter( { handleFilterQuotes } ) {

    const handleInput = (event) => {
        
        handleFilterQuotes(event.currentTarget.value)
    }

    return (
        <form>
          <label htmlFor="">Filtra por frase: </label>
          <input className="quotesfilter" type="text" onInput={handleInput}/> 
          <label htmlFor="">Filtrar por personaje: </label>
          <select name="characters" id="">
            <option value="all">Todos</option>
            <option value="Monica">Mónica</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Rachel">Rachel</option>
            <option value="Ross">Ross</option>
            <option value="Joey">Joey</option>
            <option value="Chandler">Chandler</option>
          </select>
        </form>
    );
  }
  
export default Filter;