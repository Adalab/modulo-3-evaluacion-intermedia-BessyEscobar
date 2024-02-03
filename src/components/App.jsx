import '../scss/App.scss'

function App() {
  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <form>
          <input className="quotesfilter" type="text" /> 
          <label htmlFor="">Filtrar por personaje</label>
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

        <section>
          <ul>
            <li className="">But they don`t know that we know they know we know! - Phoebe</li>
            <li className="">I got off the plane. - Rachel</li>
            <li className="">We were on a break! - Ross</li>
            <li className="">Here come the meat sweats. - Joey</li>
            <li className="">I`m not so good with the advice. Can I interest you in a sarcastic comment? - Chandler</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
