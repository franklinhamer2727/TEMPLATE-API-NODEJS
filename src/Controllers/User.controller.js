var User = require('../Model/User');

async function getAllUsers(req,res){
    var users = await User.findAll();
    res.json({
        data:users
    })
}
async function getOne(req,res){
    var {id}= req.params;
    var user = await User.findOne({
        where:{
            id
        }
    });
    res.json({
        data:user
    });
}
async function createUser(req,res){
    var {nombres, apellidos,correo,celular, genero} = req.body;
    try{
        var newUser = await User.create({
            nombres, apellidos, correo, celular, empresa, genero
        },{
            fields:['nombres','apellidos','correo','celular','genero']
        });
        if(newUser){
            res.json({
                message: "usuario creado satisfactoriamente",
                data:newUser
            })
        }
    }
    catch( error){
        console.log(error)
        res.status(500).json({
            message:"Erros al crear usuario",
            data:{}
        })
    }
}

async function deleteUser(req,res){
    var {id}= req.params;
    var rowCount = await User.destroy({
        where:{
            id
        }
    })
    res.json(rowCount);
}

async function updateUser(req,res){
    var {id} = req.params;
    var { nombres,apellidos,correo,celular,genero} = req.body
    var user = await User.findOne({
        where:{
            id
        }
    });
    user.update({nombres,apellidos,correo,celular,genero});
    res.json(user);
}

module.exports = {
    getAllUsers,
    getOne,
    createUser,
    deleteUser,
    updateUser
}