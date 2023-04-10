
const EditOne = () => {

    return (
        <>
                {/* // DISPLAY THE DETAILS OF ONE POKEMON HERE */}
        <h2 className="space">Edit Pokemon</h2>
        <form>
            <div className="pokemon-card">
                <h4>Name: </h4>
                <input id="new-nickname" type="text"/>
                <img alt="a pokemon" />
                <div>
                    <label>Berries: </label>
                    <input id="new-nickname" type="number" />
                </div>
                <p>Type: </p>
            </div>
            <input type="submit" value="Edit Pokemon" />
        </form>
        </>
    )
}

export default EditOne