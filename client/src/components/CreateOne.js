import PokeBall from '../img/pokeball.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateOne = () => {

    {/* ************************************REVIEW********************************* */ }
    {/* ************************************ERRORS********************************* */ }
    {/* ************************************RENDER********************************* */ }


    const [pokeList, setPokeList] = useState({
        name: "",
        nickname: "",
        image: PokeBall,
        type: ""
    })
    const [errors, setErrors] = useState({
        searchErrors: "",
        postErrors: ""
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setPokeList({ ...pokeList, [e.target.name]: e.target.value })
    }

    const searchHandler = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeList.name.toLowerCase()}`)
            .then((res) => {
                console.log(res.data)
                setPokeList({
                    name: res.data.name,
                    image: res.data.sprites.front_shiny,
                    type: res.data.types[0].type.name
                })
                setErrors({}) //<= added this line because I want to reset my errors upon successful post
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
                setErrors({ ...errors, searchErrors: "Must be a valid Pokemon Name" })
            })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:8000/api/pokemon', pokeList)
            .then((res) => {
                console.log("Success! You add a pokemon to your party", res.data)
                setErrors({}) //<= added this line because I want to reset my errors upon successful post
                navigate('/')
            })
            .catch((err) => {
                console.log("Something went wrong (CreateOne.js): ", err)
                setErrors({ ...errors, postErrors: err.response.data.errors.nickname.message })
            })

    }

    return (
        <>
            <h2 className="space">Add Pokemon</h2>
            <form onSubmit={submitHandler} id="pokedex">
                <div id="left">
                    <div id="logo"></div>
                    <div id="bg_curve1_left"></div>
                    <div id="bg_curve2_left"></div>
                    <div id="curve1_left">
                        <div id="buttonGlass">
                            <div id="reflect"> </div>
                        </div>
                        <div id="miniButtonGlass1"></div>
                        <div id="miniButtonGlass2"></div>
                        <div id="miniButtonGlass3"></div>
                    </div>
                    <div id="curve2_left">
                        <div id="junction">
                            <div id="junction1"></div>
                            <div id="junction2"></div>
                        </div>
                    </div>
                    <div id="screen">
                        <div id="topPicture">
                            <div id="buttontopPicture1"></div>
                            <div id="buttontopPicture2"></div>
                        </div>
                        {/* ************************************SPRITES********************************* */}
                        <div id="picture">
                            <img id="sprite-pic" src={pokeList.image} alt="Pokemon"
                                height="170" />
                        </div>
                        {/* ************************************SPRITES********************************* */}
                        <div id="buttonbottomPicture"></div>
                        <div id="speakers">
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                        </div>
                    </div>
                    {/* ************************************SEARCH BUTTON********************************* */}
                    <button type='button' id="bigbluebutton" onClick={searchHandler}></button>
                    {/* ************************************SEARCH BUTTON********************************* */}
                    <div id="barbutton1"></div>
                    <div id="barbutton2"></div>
                    <div id="cross">
                        <div id="leftcross">
                            <div id="leftT"></div>
                        </div>
                        <div id="topcross">
                            <div id="upT"></div>
                        </div>
                        <div id="rightcross">
                            <div id="rightT"></div>
                        </div>
                        <div id="midcross">
                            <div id="midCircle"></div>
                        </div>
                        <div id="botcross">
                            <div id="downT"></div>
                        </div>
                    </div>
                </div>
                <div id="right">


                    {/* ************************************WORKSPACE********************************* */}
                    <div id="stats">
                        <div>
                            <label>PokeSearch: </label>
                            {/* HERE IS WHERE WE WILL ENTER POKEMON NAMES TO REQUEST DATA FROM POKEAPI */}
                            {errors.searchErrors ? <p className='errors'>{errors.searchErrors}</p> : null}
                            <input id="search-bar" type="text" placeholder="Pokemon Names" name='name' onChange={changeHandler} />
                        </div>
                        {pokeList.name !== "" && pokeList.type !== "" ?
                            <ul id="stats-list">
                                <li>Name: {pokeList.name.charAt(0).toUpperCase() + pokeList.name.slice(1)} |</li>
                                <li>Type: {pokeList.type.charAt(0).toUpperCase() + pokeList.type.slice(1)}</li>
                                <div id='nickname-wrapper'>
                                    <label htmlFor="nickname">Nickname: </label>
                                    <input type="text" name="nickname" id='search-bar' placeholder='Nickname Your Pokemon' onChange={changeHandler} />
                                    <input type="submit" value="Add to Party" />
                                    {errors.postErrors ? <p className='errors' /*fixed*: had the wrong thing rendering*/ >{errors.postErrors}</p> : null}
                                    {/* HERE IS WHERE WE WILL DISPLAY THE POKEMON AND THE SEARCH POPUP FOR THE ACTUAL SUBMIT */}
                                </div>
                            </ul>
                            : null}


                    </div>
                    {/* ************************************WORKSPACE********************************* */}


                    <div id="blueButtons1">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                    <div id="blueButtons2">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                    <div id="miniButtonGlass4"></div>
                    <div id="miniButtonGlass5"></div>
                    <div id="barbutton3"></div>
                    <div id="barbutton4"></div>
                    <div id="yellowBox1"></div>
                    <div id="yellowBox2"></div>
                    <div id="bg_curve1_right"></div>
                    <div id="bg_curve2_right"></div>
                    <div id="curve1_right"></div>
                    <div id="curve2_right"></div>
                </div>
            </form>
        </>
    )
}

export default CreateOne