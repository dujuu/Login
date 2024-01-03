import * as jwt from 'jsonwebtoken';

export function generarTokenRecuperacion(correoUsuario: string): string {
  const crypto = require('crypto');
  const claveSecreta = crypto.randomBytes(32).toString('base64');
  const token = jwt.sign({ correo: correoUsuario }, claveSecreta, { expiresIn: '1h' });
  console.log(token,"tttooookkkeeennnnn");
  return token;
}
