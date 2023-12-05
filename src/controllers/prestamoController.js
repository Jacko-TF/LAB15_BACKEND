const Prestamo = require(`../models/Prestamo`)
const Pelicula = require(`../models/Pelicula`)
const Socio = require(`../models/Socio`)

async function registrar(req, res){
    try{
        const socioId =  req.body.socioId
        const cintaId =  req.body.cintaId

        const socio = await Socio.findOne({_id: socioId});
        const cinta = await Cinta.findOne({_id: cintaId});

        prestamos= await Prestamo.create({
            fecha: Date.now(),
            cinta: cinta,
            socio: socio,
            devuelta: false
        })

        res.status(201).json({
            message: "Prestamo creada correctamente",
            prestamo: prestamo
        })
    }catch(e){
        res.status(500).json({
            message: e
        })
    }
}

async function listar(req, res){
    try {
        const Prestamos = await Prestamo.find();
        res.status(201).json(Prestamos);
    } catch (error) {
        console.log('error',error)
    }
}

module.exports = {
    listar,
    registrar
};