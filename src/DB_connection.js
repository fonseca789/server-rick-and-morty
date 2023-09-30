require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
//
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const POSTGRES_URL = process.env.POSTGRES_URL
const sequelize = new Sequelize(
  POSTGRES_URL+"?sslmode=require",
  { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize);
//
FavoriteModel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

// Asociations
User.belongsToMany(Favorite, { through: "UserFavorite" });
Favorite.belongsToMany(User, { through: "UserFavorite" });

module.exports = {
  User,
  Favorite,
  ...sequelize.model,
  conn: sequelize,
};
