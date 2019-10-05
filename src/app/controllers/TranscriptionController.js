import S3 from '../../services/aws/S3';
import Transcribe from '../../services/aws/Transcribe';

class TranscriptionController {
  async create(req, res) {
    const bucketFile = await S3.uploadFile(req.params.name, req.file);
  }
}

export default new TranscriptionController();
