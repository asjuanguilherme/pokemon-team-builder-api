const express = require("express")
const bodyParser = require("body-parser")
const PokemonTeam = require("./database/models/PokemonTeam")
const { isJson } = require("./helpers")

const app = express()
const port = 4000

app.listen(port, err => {
  if (err) console.error(err)
  else console.log(`O servidor foi iniciado com sucesso na porta ${port}.`)
})

app.use(bodyParser.urlencoded({ extended: false }))

app.post("/teams", (req, res) => {
  const name = req.body.name
  const characters = req.body.characters

  if (!name || !characters) return res.send("Todos os campos são obrigatórios")
  if (!isJson(characters) || typeof JSON.parse(characters) !== "object")
    return res.send(
      "O campo 'characters' deve ser um array com os ids dos pokemons do time."
    )
  if (JSON.parse(characters).length < 6)
    return res.send("Um time deve ter 6 pokemons.")

  PokemonTeam.create({ name, characters })
    .then(() => res.send("Time criado com sucesso"))
    .catch(err => {
      console.log(err)
      res.send("Houve um erro ao criar o time")
    })
})

app.get("/teams", (req, res) => {
  PokemonTeam.findAll({ raw: true })
    .then(data => res.send(data))
    .catch(err => {
      console.log(err)
      res.send("Não existem times cadastrados")
    })
})
