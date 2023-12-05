const Cinta = require("../models/Cinta")
const Pelicula = require(`../models/Pelicula`)

async function registrar(req, res){
    try{
        const body = req.body
        await Pelicula.create(body)
        res.status(201).json({
            message: "Pelicula creada correctamente"
        })
    }catch(e){
        res.status(500).json({
            message: e
        })
    }
}

async function listar(req, res){
    try {
        const peliculas = await Pelicula.find().populate('actor').populate('genero').populate('director');
        res.status(201).json(peliculas);
    } catch (error) {
        console.log('error',error)
    }
}

async function detalle(req, res){
    try {

        // console.log(pelicula);
        // const cintas = await Cinta.find({pelicula:pelicula});
        // res.status(201).json({
        //     numero_cintas: cintas.length,
        //     cintas: cintas
        // });
        const id = req.params.id;
        const pelicula = await Pelicula.findOne({ _id : id}).populate('actor').populate('genero').populate('director')
        const cintas = await Cinta.find({pelicula:pelicula});
        console.log(cintas);
        res.status(201).json({
                cintas: cintas.length,
                lista_cintas: cintas,
                pelicula: pelicula,
            });
    } catch (error) {
        console.log('error',error)
    }
}

module.exports = {
    listar,
    registrar,
    detalle
};