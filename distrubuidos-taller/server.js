const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mi-database.db');

//const userRoutes = require('./routes');


app.use(express.json());
//app.use('/api', userRoutes);

// Aquí irían tus rutas y lógica de Express

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
