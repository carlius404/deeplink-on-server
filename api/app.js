const express = require('express');
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/.well-known', express.static('.well-known'));

// Routes;
app.get('/', (req, res) => {
  res.status(200).json({
    data: 'yeap oldu',
  });
});

// Add a route for /list
app.get('/list', (req, res) => {
  const listId = req.query.listId;
  res.status(200).json({
    message: `Received listId: ${listId}`,
  });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
