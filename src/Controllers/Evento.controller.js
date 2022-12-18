var Evento = require('../Model/Evento');

async function createEvento(req,res){
    var {evento, descripcion, presentacion, codigo, realizado, fecha}= req.body
    try{

        var newEvento = await Evento.create({
            evento,descripcion,presentacion,codigo,fecha,realizado
        },{
            fields:['evento','descripcion','presentacion','codigo','fecha','realizado']
        });
        if (newEvento){
            res.json({
                message:"Se ha realizado el registro satisfactoriamente",
                data:newEvento
            })
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:"Erros al crear usuario",
            data:{}
        })
    }

}

async function getEventos(req,res){
    var eventos = await Evento.findAll();
    res.json({
        data:eventos
    });
}

async function getEvento(req,res){
    var {id}=req.params;
    var evento= await Evento.findOne({
        where:{
            id:id
        }
    });
    res.json({
        data:evento
    });
}
module.exports = {
    createEvento,
    getEventos,
    getEvento,
}