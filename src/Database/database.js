var Sequelize= require('sequelize');
var sequelize = new Sequelize(
    'dbtest',//nombre de la base de datos
    'postgres', //nombre de usuario
    'postgres', //password
    {
        host:'localhost',
        dialect:'postgres',
        logging: false

    }
)
module.exports = sequelize