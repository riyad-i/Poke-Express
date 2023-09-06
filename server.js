const express = require('express')

const app = express()
const PORT = 3000

const pokemon = require('./models/pokemon')

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());


app.get('/', (req, res) => {
    res.send('Working!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params
    const poke = pokemon[id]
    // console.log(poke);
    res.render('Show', {poke})
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})