import 'dotenv/config';
import express from 'express';
import routes from './routes';
import path from 'path';

import './database';

class App {
  constructor(){
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware(){
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'upload')))
  }

  routes(){
    this.server.use(routes)
  }

}

export default new App().server;
