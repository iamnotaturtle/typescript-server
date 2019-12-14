import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('OK');
});

export default app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
