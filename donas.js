/* slack-donas
 *
 * Un webhook creado con Node y Express
 * que se encarga de responder el comando
 * "/donas" accionado en Slack.
 *
 * Licencia MIT © 2017 despejala
 */

// Dependencias
const express = require('express');
const server = express();

/* Configuración del puerto
 *
 * Permite el funcionamiento en el entorno local
 * y en el de producción; por ejemplo, en Heroku.
 */
server.set('port', process.env.PORT || 3000);

/* Método GET
 *
 * Una vez inicializado el servidor, al acceder
 * (al enviar un HTTP GET Request) a la URL
 * el mismo responderá un mensaje indicando que
 * todo está bien.
 */
server.get('/', (req, res) => {
  res.send('OK');
});

/* Método POST
 *
 * Le permite al API de Slack comunicarse con
 * el servidor (enviar un HTTP POST Request).
 * Es aquí donde se envían los emojis de las donas
 * para que sean publicados en el canal de Slack
 * donde fue accionado el comando.
 */
server.post('/', (req, res) => {
  res.send(':doughnut: :doughnut: :coffee:');
});

/* Inicialización del servidor
 *
 * Es aquí donde el servidor comienza a trabajar,
 * es decir, donde comienza a "escuchar" peticiones
 * (HTTP Requests) hechas al puerto previamente
 * configurado. Si todo está bien, debería mostrarse
 * (sólo una vez) en la consola el mensaje definido
 * en el callback.
 */
server.listen(server.set('port'), () => {
  console.log('Todo anda chévere ✔');
});
