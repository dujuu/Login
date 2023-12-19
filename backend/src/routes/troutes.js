const { Router} = require('express');
const { 
    EliminarUsuario,
    ObtenerDatos,
    ObtenerUsuario,
    AgregarUsuario,
    ModificarUsuario,
    IniciarSesion, 
} = require('../conrollers/controllers');

const router = Router();

router.get('/obtener', ObtenerDatos);
router.post('/IniciarSesion', IniciarSesion);
router.post('/agregar', AgregarUsuario);

//router.get('/obtener/:usuario', ObtenerUsuario);

//router.post('/Iniciar/:correo,contraseña',IniciarSesion);
// this.httpClient.post('/IniciarSesion', { correo, contraseña })
//     .subscribe(...);

router.delete('/eliminar', EliminarUsuario);
router.patch('/actualizar/:usuario', ModificarUsuario);

//post
//put  actualizar
//delete  eliminar
//get obtener
module.exports = router;