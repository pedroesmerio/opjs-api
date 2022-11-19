import path from 'node:path';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

const port = process.env.PORT || 3333;
const databaseUri = process.env.DATABASE_URI;
console.log('database on:', databaseUri);

mongoose
  .connect(`${databaseUri}`)
  .then(() => {
    const app = express();

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    );

    //recebe o json da requisição e transforma ele em texto
    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`Server is runnig on port: ${port}`);
    });
    console.log('Conectado ao mongodb');
  })
  .catch(() => console.log('Erro ao conectar ao banco de dados'));

