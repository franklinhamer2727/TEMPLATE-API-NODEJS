var Sequelize = require('sequelize');
var sequelize = require('../Database/database');


const Evento = sequelize.define('eventos',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    evento:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    descripcion:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    presentacion:{
        type:Sequelize.STRING,
    },
    codigo:{
        type:Sequelize.STRING
    },
    fecha:{
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue:false
    },
    realizado:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
    }
}
,{
    timestamps: false
}

);
module.exports = Evento