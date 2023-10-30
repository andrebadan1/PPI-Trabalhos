import express from 'express';

const app = express();

const host = '0.0.0.0';
const porta = 8080;

function gerarTabuada(numero) {
  let tabuadaHTML = `<h2>Tabuada do ${numero}:</h2><ul>`;
  for (let i = 1; i <= 10; i++) {
    tabuadaHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
  }
  tabuadaHTML += '</ul>';
  return tabuadaHTML;
}

app.get('/', (req, res) => {
  const numero = parseInt(req.query.tabuada);
  if (!isNaN(numero)) {
    const tabuada = gerarTabuada(numero);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabuada</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
          }
          ul {
            list-style-type: square;
            font-size: 24px;
            text-align: center;
          }
          .tabuada-container {
            text-align: center;
          }
          h2 {
            font-size: 24px;
          }
        </style>
    </head>
    <body>
        <div class="tabuada-container">
          ${tabuada}
        </div>
    </body>
    </html>
  `);
  } else {
    res.send('Por favor, informe um número válido na URL, por exemplo: /?tabuada=3');
  }
});

app.listen(porta, host, () => {
  console.log(`Servidor Executando em http://${host}:${porta}.`);
});

