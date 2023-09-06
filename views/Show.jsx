const React = require('react')



function Show({poke}){
    return(
        <>
        <h1>{poke.name}</h1>
        <a href='/pokemon'>Back</a>
        </>
    )
}











module.exports = Show