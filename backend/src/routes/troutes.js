const { Router} = require('express');
const { 
    EliminarUsuario,
    ObtenerDatos,
    obtenerUsuario,
    AgregarUsuario,
    ModificarUsuario,
    IniciarSesion,
    EnviarCorreoRecuperacion, 
} = require('../conrollers/controllers');

const router = Router();

router.get('/obtener', ObtenerDatos);
router.post('/IniciarSesion', IniciarSesion);
router.post('/agregar', AgregarUsuario);

router.post('/Erecuperacion', EnviarCorreoRecuperacion);

//router.get('/obtener/:usuario', ObtenerUsuario);

router.delete('/eliminar', EliminarUsuario);
router.patch('/actualizar/:usuario', ModificarUsuario);

//post
//put  actualizar
//delete  eliminar
//get obtener
module.exports = router;