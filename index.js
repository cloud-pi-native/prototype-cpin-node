const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Pour parser le JSON dans les requêtes POST et PUT

// Middleware pour logger les headers des requêtes
app.use((req, res, next) => {
  console.log('Headers:', req.headers);
  next();
});

// Endpoints GET - Accès pour admin, modérateur, utilisateur
app.get('/user/1', (req, res) => {
  res.json({ message: 'C’est pas faux.' });
});

app.get('/user/2', (req, res) => {
  res.json({ message: 'On en a gros !' });
});

app.get('/user/3', (req, res) => {
  res.json({ message: 'Faut pas respirer la compote, ça fait tousser.' });
});

// Endpoints PUT - Accès pour admin et modérateur
app.put('/modo/1', (req, res) => {
  res.json({ message: 'Je ne vous jette pas la pierre, mais vous êtes un peu responsable.' });
});

app.put('/modo/2', (req, res) => {
  res.json({ message: 'Le gars c\'est la vie' });
});

// Endpoints POST - Accès pour admin uniquement
app.post('/admin/1', (req, res) => {
  res.json({ message: 'C’est pas moi, c’est la table !' });
});

app.post('/admin/2', (req, res) => {
  res.json({ message: 'La chevalerie, c’est pas là où on range les chevaux ?' });
});



// Endpoint ouvert à tous
app.get('/public', (req, res) => {
  res.json({ message: '13, 14, 15 … Enfin, tous les chiffres impairs jusqu’à 22.' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
