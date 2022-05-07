const { Sequelize, Model, DataTypes } = require('sequelize')
const connection = require('../config')

const tableName = 'pokemon_teams'
const Team = connection.define(tableName, {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  characters: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Team.sync({ force: false })
  .then(() => console.log(`A tabela '${tableName}' foi criada com sucesso`))
  .catch(err => console.error(err))

module.exports = Team
