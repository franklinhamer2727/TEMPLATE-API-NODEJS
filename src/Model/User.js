var Sequelize = require('sequelize');
var sequelize = require('../Database/database');

var User = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        alloeNull: false
    },
    nombres:{
        type: Sequelize.TEXT
    },
    apellidos:{
        type: Sequelize.TEXT
    },
    celular:{
        type:Sequelize.TEXT
    },
    genero:{
        type: Sequelize.TEXT
    }
},
{
    timestamps:false
});
module.exports = User