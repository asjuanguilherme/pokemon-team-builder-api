const Sequelize = require("sequelize")
require("dotenv").config()

const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASS,
  DATABASE_HOST,
  DATABASE_PORT,
} = process.env

const connection = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASS, {
  host: DATABASE_HOST,
  dialect: "mysql",
  port: DATABASE_PORT,
})

connection
  .authenticate()
  .then(() =>
    console.log(
      `Conectado ao banco de dados '${DATABASE_NAME}' como '${DATABASE_USER}'.`
    )
  )
  .catch(err => console.error(err))

module.exports = connection
