const { Router} = require('express');
const { 
    EliminarUsuario,
    ObtenerDatos,
    ObtenerUsuario,
    AgregarUsuario,
    ModificarUsuario, 
} = require('../conrollers/controllers');

const router = Router();

router.get('/usuario', ObtenerDatos);

router.get('/obtener/:usuario', ObtenerUsuario);

router.post('/agregar', AgregarUsuario);

//router.post('/iniciar-sesion', IniciarSesion);

router.delete('/eliminar', EliminarUsuario);

router.patch('/actualizar/:usuario', ModificarUsuario);

//post
//put  actualizar
//delete  eliminar
//get obtener
module.exports = router;