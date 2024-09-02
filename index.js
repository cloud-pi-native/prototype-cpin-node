const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Pour parser le JSON dans les requêtes POST et PUT

// Endpoints GET - Accès pour admin, modérateur, utilisateur
app.get('/quote1', (req, res) => {
  res.json({ message: 'C’est pas faux.' });
});

app.get('/quote2', (req, res) => {
  res.json({ message: 'On en a gros !' });
});

app.get('/quote3', (req, res) => {
  res.json({ message: 'Faut pas respirer la compote, ça fait tousser.' });
});

// Endpoints PUT - Accès pour admin et modérateur
app.put('/quote4', (req, res) => {
  res.json({ message: 'Je ne vous jette pas la pierre, mais vous êtes un peu responsable.' });
});

app.put('/quote5', (req, res) => {
  res.json({ message: 'On en a gros !' });
});

// Endpoints POST - Accès pour admin uniquement
app.post('/quote6', (req, res) => {
  res.json({ message: 'C’est pas moi, c’est la table !' });
});

app.post('/quote7', (req, res) => {
  res.json({ message: 'Au secours !' });
});

// Endpoint ouvert à tous
app.get('/public', (req, res) => {
  res.json({ message: 'Bienvenue' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
