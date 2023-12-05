const express = require("express");

const bodyParser = require('body-parser');

const app = express();

const config = require('./src/config/config');

const connection = require('./src/database/dbController')

//Routes
const socio_routes = require('./src/routes/socio.routes')
const pelicula_routes = require('./src/routes/pelicula.routes')
const prestamo_routes = require('./src/routes/prestamo.routes')

const cors = require('cors');

connection()

//data
const Cinta = require(`./src/models/Cinta`)
const Genero = require(`./src/models/Genero`)
const Director = require(`./src/models/Director`)
const Actor = require(`./src/models/Actor`)
const Pelicula = require(`./src/models/Pelicula`)
const Socio = require(`./src/models/Socio`)
const Prestamo = require(`./src/models/Prestamo`)

async function data(){
    const genero = await Genero.create({name:"Accion"});
    const director = await Director.create({name: "Tarantino"});
    const actor = await Actor.create({name: "Brad Pitt"});

    const pelicula = await Pelicula.create({
        name: "Kung fu panda",
        genero: genero,
        actor: actor,
        director: director
    })

    const socio = await Socio.create({
        codigo: "001",
        nombre: "Jacko",
        direccion: "Calle 7",
        telefono: "964950100",
    })

    const cinta = await Cinta.create({
        numero:"001",
        pelicula: pelicula,
        disponible: true
    })

    const prestamo =  await Prestamo.create({
        socio:socio,
        cinta: cinta,
        fecha:Date.now(),
        devuelta:false
    })
    console.log(await Prestamo.find().populate(({
        path: "socio",
    })).populate(({
        path:"cinta"    
    })));
}

//data()

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/socio', socio_routes)
app.use('/pelicula', pelicula_routes)
app.use('/prestamo', prestamo_routes)

app.get("/",(req, res)=>{
    res.json({
        message: "Bienvenido"
    })
})

async function init(){
    await app.listen(config.port, () => {
        console.log(`Servidor corriendo en http://localhost:${config.port}`);
    });
}

init()