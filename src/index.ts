import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3333;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    //recebe o json da requisição e transforma ele em texto
    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`Server is runnig on http://localhost:${port}`);
    });
    console.log('Conectado ao mongodb');

  })
  .catch(() => console.log('Erro ao conectar ao banco de dados'));
