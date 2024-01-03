const nodemailer = require('nodemailer');

// Configuración para el transporte de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sistemaprueba74@gmail.com', // mi direccion de correo
    pass: 'izsr xvig dvxy hsrb' // contraseña hacerla mas segura en un futuro
  }
});

// Función para enviar correos de recuperación
const enviarCorreoRecuperacion = (destino, token) => {
  const mailOptions = {
    from: 'sistemaprueba74@gmail.com',
    to: destino,
    subject: 'Recuperación de Contraseña',
    text: `Haz clic en el siguiente enlace para recuperar tu contraseña: http://localhost:4200/inicio?token=${token}`
  };
console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

module.exports = { enviarCorreoRecuperacion };
