const pool = require("../bd");
const jwt = require('jsonwebtoken');
const { enviarCorreoRecuperacion } = require('../../../distrubuidos-taller/archivos/correo'); 

import {enviarCorreoRecuperacion} from '../../../distrubuidos-taller/archivos';
//import { LoginReq } from '../services/auth/loginReq';

const EnviarCorreoRecuperacion = async (req, res, next) => {
    try {
        const { usuario } = req.body;
        const result = await pool.query('SELECT correo FROM usuario WHERE usuario = $1', [usuario]);

        if (resultadoConsulta.rows.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado :c" });
        }


        const correo = resultadoConsulta.rows[0].correo;

        const token = generarTokenRecuperacion(correo)
        
        enviarCorreoRecuperacion(correo, token);

        res.json({ message: "Correo de recuperación enviado con éxito" });
    } catch (error) {
        next(error);
    }
};