const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const troutes = require('./routes/troutes');

const app = express();

// Habilitar CORS
app.use(cors({
   // origin: 'http://localhost:3500' // Asegúrate de cambiar esto si tu origen frontend cambia
}));




// Morgan para logging
app.use(morgan('dev'));

// Soporte para JSON
app.use(express.json());

// Tus rutas
app.use(troutes);

// Manejo de errores
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

// Escuchar en el puerto 3500
app.listen(3500, () => {
    console.log('Server on port 3500');
});





/*




const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');

const troutes = require('./routes/troutes');

const app = express();

//app.use (cors())
app.use(morgan('dev'))
app.use(express.json());

app.use(troutes)

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


app.use(cors({
    origin: 'http://localhost:3500' 
  }));
  

app.listen(3500)
console.log('server on port 3500')
*/