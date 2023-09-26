const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const app = express();

const CLIENT_ID = 'ed0a45eb13e5dc47ae5d';
const CLIENT_SECRET = 'b36cb14dcdae7a2626b1ef2e091ca302ff2cb06d';
const REDIRECT_URI = 'https://chatbot-tecia--cagmont.repl.co/'; // Ajusta esto según tu configuración

// Ruta de inicio de sesión
app.get('/auth/login', (req, res) => {
  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'user',
  });

  res.redirect(`https://github.com/login/oauth/authorize?${queryParams}`);
});

// Ruta de callback después de autorización
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;

  try {
    // Intercambio de código por token de acceso
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: ed0a45eb13e5dc47ae5d,
      client_secret: b36cb14dcdae7a2626b1ef2e091ca302ff2cb06d,
      code: code,
      redirect_uri: chatbot-tecia--cagmont.repl.co,
    });

    const token = querystring.parse(response.data).access_token;

    // Ahora puedes usar el token para realizar solicitudes a la API de GitHub
    // Por ejemplo, para obtener información del usuario autenticado
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = userResponse.data;
    
    // Aquí podrías almacenar la información del usuario en tu base de datos y
    // redirigir al usuario a la página deseada
    res.send(`¡Hola, ${user.login}!`);
  } catch (error) {
    console.error('Error en el proceso de autenticación:', error);
    res.status(500).send('Error en el proceso de autenticación');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
// Google Oauth 
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5173;

app.get('/auth/google/callback', async (req, res) => {
    const code = req.query.code;
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
        params: {
            code,
            client_id: '864535874429-4trig49blvkk4lltgfnoe9kt80enstig.apps.googleusercontent.com',
            client_secret: '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',
            redirect_uri: 'https://chatbot-tecia--cagmont.repl.co',
            grant_type: 'authorization_code'
        }
    });

    const accessToken = tokenResponse.data.access_token;
    // Aquí puedes usar el token de acceso para hacer solicitudes a la API de Google en nombre del usuario
    // Por ejemplo, puedes obtener su información de perfil o su correo electrónico.
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// AZURE

const azureButton = document.getElementById('azure');

azureLoginButton.addEventListener('click', () => {
    // Redirige al servicio de autenticación de Azure AD
    const client_id = '317027fa-496e-4e62-80a8-6324eb24a3bd';
    const redirect_uri = 'api://317027fa-496e-4e62-80a8-6324eb24a3bd/www.chatbot-tecia--cagmont.repl.co';
    const scope = 'openid profile email User.Read'; // Define los permisos que necesitas

   
});
