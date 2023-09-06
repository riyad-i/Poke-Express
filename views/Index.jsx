const React = require('react')



function Index({pokemon}){
    console.log(pokemon)
    return (
        <>
            <h1>Pokemon</h1>
            {pokemon.map(pokemon => {
                return(
                    <h3>{pokemon.name}</h3>
                )
            })}
        </>
    )
}










module.exports = Index