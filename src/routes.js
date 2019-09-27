import { Router } from 'express';
import s3 from './services/aws/s3';

const routes = new Router();

routes.get('/s3', s3.index);
routes.post('/s3', s3.create);
routes.delete('/s3', s3.delete);
routes.post('/s3', s3.upload);

export default routes;
