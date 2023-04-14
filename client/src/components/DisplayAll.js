import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const DisplayAll = () => {

    const [pokemonParty, setPokemonParty] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/pokemon')
        .then((res) => {
            console.log("Got All Pokemon", res.data)
            setPokemonParty(res.data)
        })
        .catch((err) => {
            console.log("Something went wrong: ", err)
        })
    }, [])

    const deleteHandler = (idFromMap) => {
        axios.delete(`http://localhost:8000/api/pokemon/${idFromMap}`)
        .then((res) => {
            console.log("Deleted Pokemon:", res )
            const newPokemonParty = pokemonParty.filter((allOtherPokemon) => allOtherPokemon._id !== idFromMap)
            setPokemonParty(newPokemonParty)
        })
        .catch((err) => {
            console.log("Something went wrong: ", err)
        })
    }

    return (
        <div>
            <h2 className="space">Pokemon Party</h2>
            <div className="poke-party">
                {
                    pokemonParty.map((onePokemon) => (
                        <div className='pokemon-card' key={onePokemon._id}>
                            <h3>{onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1)}</h3>
                            <h4>{onePokemon.nickname.charAt(0).toUpperCase() + onePokemon.nickname.slice(1)}</h4>
                            <Link to={`/displayOne/${onePokemon._id}`}><img src={onePokemon.image} alt={onePokemon.name} /></Link>
                            <p>{onePokemon.type}</p>
                            <div className='card-buttons'>
                                <button className='green-btn'>Edit</button>
                                <button className='red-btn' onClick={() => deleteHandler(onePokemon._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayAll