const React = require('react')



function Show({poke}){
    const myStyle = {
        color: 'brown',
        backgroundColor: 'beige',
    };
    
    // console.log(poke);
    return(
        <div style={myStyle}>
        <h1>{poke.name}</h1>
        <img src={poke.img + '.jpg'}/>
        <a href='/pokemon'>Back</a>
        </div>
    )
}











module.exports = Show