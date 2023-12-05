const Socio = require(`../models/Socio`)

async function registrar(req, res){
    try{
        const body = req.body
        await Socio.create(body)
        res.status(201).json({
            message: "Socio creado correctamente"
        })
    }catch(e){
        res.status(500).json({
            message: e
        })
    }
}

async function listar(req, res){
    try {
        const socios = await Socio.find();
        res.status(201).json(socios);
    } catch (error) {
        console.log('error',error)
    }
}

module.exports = {
    listar,
    registrar
};