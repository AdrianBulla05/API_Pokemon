//mongoose actúa como el intermediario entre la base de datos en mongo y la API 
const mongoose = require ("mongoose");
//para conectar la base de datos de mongo siempre se deben usar los parametros "useNewUrlParser:true, useUnifiedTopology:true"
mongoose.connect("mongodb://AdrianBulla:1234@127.0.0.1:27017/pokemon",{useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("Conexión de base de datos EXITOSA")) //.then Almacena el response y trae información
.catch(err => console.log("Error al conectar con la base de datos", err)); //.catch atrapar y visualizar el mensaje de error generado
//especificaciones del esquema de datos
const pokemonSchema = new mongoose.Schema(
    {
        nombre: String,
        tipo: String,
        nivel: Number
    }
);
// creación del modelo dependiendo del esquema anterior
const pokemones = mongoose.model("pokemones", pokemonSchema)
// Datos para guardar en la base de datos
const nuevoPokemon = new pokemones({
        nombre: "squirtle",
        tipo: "agua",
        nivel: 20
});

nuevoPokemon.save()
.then (()=> console.log ("Atrapaste un nuevo Pokemon"))
.catch(err => console.log("El Pokemon escapó", err));

//leer todos los registros, se usa la constante que contiene el schema, el modelo de mongoose
pokemones.find()
.then(pokemones => console.log("Tienes atrapados estos pokemones: ", pokemones))
.catch(err => console.log("Se produjo un error al ver los pokemones", err));

// mongoose.disconnect();

