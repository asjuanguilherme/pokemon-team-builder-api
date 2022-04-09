const express = require("express")
const connection = require("./database/config")
const PokemonTeams = require("./database/models/PokemonTeam")

const app = express()
const port = 4000

app.listen(port, err => {
  if (err) console.error(err)
  else console.log(`O servidor foi iniciado com sucesso na porta ${port}.`)
})
