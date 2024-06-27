const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

/* try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso no MySQL com o Sequelize");
} catch (error) {
  console.log("Não foi possível conectar: ", error);
} */

module.exports = sequelize;
