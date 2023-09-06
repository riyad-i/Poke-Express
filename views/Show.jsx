const React = require('react')



function Show({poke}){
    console.log(poke);
    return(
        <>
        <h1>{poke.name}</h1>
        <img src={poke.img + '.jpg'}/>
        <a href='/pokemon'>Back</a>
        </>
    )
}











module.exports = Show