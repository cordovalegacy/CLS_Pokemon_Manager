import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import PokeBall from './img/pokeball.png'
import CreateOne from './components/CreateOne'
import DisplayAll from './components/DisplayAll'
import DisplayOne from './components/DisplayOne'
import EditOne from './components/EditOne'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <Link to={'/'}><img src={PokeBall} id='pokeball' alt='Logo'/></Link>
        <h1>Welcome to the PokeCenter</h1>
        <Link to={'/pokedex'}>Pokedex</Link>
      </nav>
      <Routes>
        <Route path='/pokedex' element={<CreateOne />}/>
        <Route path='/' element={<DisplayAll />}/>
        <Route path='/displayOne/:id' element={<DisplayOne />}/>
        <Route path='/editOne' element={<EditOne />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
