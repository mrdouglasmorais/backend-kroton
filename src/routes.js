import { Router } from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionCotroller from './app/controllers/SessionCotroller';


routes.get('/', (req, res) => {
  res.json({ message: 'Hello kroton'})
})

routes.post('/users', UserController.store);

routes.post('/session', SessionCotroller.store);

export default routes;