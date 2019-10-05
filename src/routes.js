import { Router } from 'express';
import morgan from 'morgan';
import multer from 'multer';
import S3 from './services/aws/S3';

const routes = new Router();
const upload = multer();

routes.use(morgan('tiny'));

// Show all buckets
// routes.get('/S3', S3.index);
// // Show objects of a specific bucket
// routes.get('/S3/:name', S3.show);
// // Create bucket
// routes.post('/S3', S3.create);
// // Delete bucket files
// routes.delete('/S3/', S3.delete);
// // Delete buckets???
// // Upload files to the bucket

routes.post('/S3/upload', upload.single('file'), S3.uploadFile);

export default routes;
