import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionCotroller from './app/controllers/SessionCotroller';
import AppointmentsController from './app/controllers/AppointmentsController';
import FileController from './app/controllers/FileController';
import NotificationsController from './app/controllers/NotificationsController'

import authMiddleware from './app/middeware/auth';
import multerConfig from './config/multer';

const routes = new Router();
const updloads = multer(multerConfig);

routes.get('/', (req, res) => {
  res.json({ message: 'Hello kroton'})
})

routes.post('/users', UserController.store);

routes.post('/session', SessionCotroller.store);

// todas as rotas autenticadas
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/appointments', AppointmentsController.index);

routes.post('/appointments', AppointmentsController.store);

// notifications
routes.get('/notifications', NotificationsController.index);
routes.put('/notifications/:id', NotificationsController.update);



// upload de arquivos
routes.post('/files', updloads.single('file'), FileController.store);

export default routes;