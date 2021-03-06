import "reflect-metadata";
import express from 'express';

import './database/connect';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`🚀 Running in ${port}`);
});