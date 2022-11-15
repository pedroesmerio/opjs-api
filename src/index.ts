import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3333;
    app.listen(port, () => {
      console.log(`Server is runnig on http://localhost:${port}`);
    });
    console.log('Conectado ao mongodb');

  })
  .catch(() => console.log('Erro ao conectar ao banco de dados'));
