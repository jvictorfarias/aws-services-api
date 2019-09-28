import { Router } from 'express';
import multer from 'multer';
import s3 from './services/aws/s3';

const upload = multer();
const routes = new Router();

// Show all buckets
routes.get('/s3', s3.index);
// Show objects of a specific bucket
routes.get('/s3/:name', s3.show);
// Create bucket
routes.post('/s3', s3.create);
// Delete bucket files
routes.delete('/s3/', s3.delete);
// Delete buckets???
// Upload files to the bucket
routes.post('/s3/upload', upload.single('file'), s3.upload);

export default routes;
