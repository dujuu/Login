const pool = require("../bd");


//mostramos los usuarios
const ObtenerDatos = async (req,res,next)=> {
try{
    const obtener = await pool.query('SELECT nombre, apellido, correo, usuario FROM usuario')
    res.json(obtener.rows)
  }catch (error) {
    next(error)
  }
}

// mostramos una tarea segun un dato espesifico
const ObtenerUsuario = async (req,res,next)=> {
try{
    const {usuario} = req.params;

    const result = await pool.query('SELECT * FROM usuario WHERE usuario = $1', [usuario]);

    if(result.rows.length === 0) 
    return res.status(404).json({
    message:" usuario inexistente",
    });

   res.json(result.rows[0]);
} catch (error){
    next(error)
}
};

// agregamos un usuario 
const AgregarUsuario= async (req, res,next) => {
    const { nombre, apellido, correo, contraseña, usuario } = req.body;

    try{
        const result = await pool.query(
            "INSERT INTO usuario (nombre, apellido, correo, contraseña, usuario) VALUES ($1, $2, $3 ,$4 ,$5 ) RETURNING *",
            [nombre, apellido, correo, contraseña, usuario]
        );
    
        res.json(result.rows[0]);
    } catch(error) {
        next(error)
    }
};

//eliminar un solo dato
const EliminarUsuario = async(req,res,next)=> {
 try{        
    const{eliminar} = req.params.usuario    
    const result =await pool.query(
        'DELETE FROM usuario WHERE usuario = $1',[eliminar])

    if(result.rowCount === 0) 
        return res.status(404).json({
        message:" usuario inexistente",
    });

    return res.sendStatus(204);
    }catch(error){
        next(error)
    }
};

// actualizar usuario
const ModificarUsuario = async(req,res,next)=> {
    try{
        const{usuario} = req.params;
        const{contraseña} = req.body;
    
        const result = await pool.query (
            'UPDATE usuario SET contraseña = $1 WHERE usuario = $2', [contraseña, usuario])
    
        if(result.rows.length===0)
            return res.status(404).json({
        message:"usuario no encontrado",
        });
        
        return res.json(result.rows[0])
    }catch(error){
    next(error)
    }
}

module.exports = {
    ObtenerDatos,
    ObtenerUsuario,
    AgregarUsuario,
    EliminarUsuario,
    ModificarUsuario
}