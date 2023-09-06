const React = require('react')



function Index({pokemon}){
    //map usually doesn't change original array, but the elements are objects so they get changed
    pokemon.map(pokemon => {
        let f = pokemon.name[0]
        f = f.toUpperCase()
        let full = f + pokemon.name.slice(1,pokemon.name.length)
        pokemon.name = full
    })
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