const path = require('path');
const express = require('express');
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve assetlinks.json properly (dotfiles allowed + correct MIME)
app.use(
  '/.well-known',
  express.static(path.join(__dirname, '..', '.well-known'), {
    dotfiles: 'allow',
    setHeaders: (res) => res.type('application/json'),
  })
);

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ data: 'yeap oldu' });
});

app.get('/list', (req, res) => {
  const listId = req.query.listId;
  res.status(200).json({ message: `Received listId: ${listId}` });
});

app.get('/recipe', (req, res) => {
  const listId = req.query.recipeId;
  res.status(200).json({ message: `Received recipeId: ${listId}` });
});
// ❌ DO NOT app.listen() on Vercel
// ✅ Export the Express app instead
module.exports = app;

