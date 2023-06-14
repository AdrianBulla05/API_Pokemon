const express = require ("express"); //se pone el "require" para importar la clase "express" que está dentro de la carpeta node_modules
const app = express(); // se instancia la clase, esto quiere decir que se crea un objeto para llamar la clase

app.get("/", (req,res) => {
    res.send("Mi primer API");
});

app.listen(3000,() => {
    console.log ("El servidor está conectado en el puerto 3000");
});
