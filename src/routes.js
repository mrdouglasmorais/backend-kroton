import { Router } from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionCotroller from './app/controllers/SessionCotroller';

import authMiddleware from './app/middeware/auth'


routes.get('/', (req, res) => {
  res.json({ message: 'Hello kroton'})
})

routes.post('/users', UserController.store);

routes.post('/session', SessionCotroller.store);

// todas as rotas autenticadas

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;