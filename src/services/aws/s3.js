/* eslint-disable no-console */
import AWS from 'aws-sdk';

class S3 {
  // Fix to multipart form
  async upload(req, res) {
    const bucket = new AWS.S3();
    const { originalname: name, buffer } = req.file;
    const params = {
      Bucket: req.headers.name,
      Key: name,
      Body: buffer,
    };

    try {
      await bucket.upload(params).promise();
      return res.status(200).json({ ok: 'ok' });
    } catch (err) {
      return res.status(400).json({ error: 'error' });
    }
  }

  async create(req, res) {
    const bucket = new AWS.S3();
    const { name } = req.body;

    await bucket
      .createBucket({ Bucket: name })
      .promise()
      .then(() => {
        return res.status(200).json({ success: `bucket ${name} created` });
      })
      .catch(() => {
        return res.status(400).json({ error: 'failed to create bucket' });
      });
  }

  async index(req, res) {
    const bucket = new AWS.S3();
    await bucket
      .listBuckets()
      .promise()
      .then(data => {
        return res.status(200).json(data.Buckets);
      })
      .catch(err => {
        return res.status(400).json({ error: err });
      });
  }

  async show(req, res) {
    const bucket = new AWS.S3();
    await bucket
      .listObjectsV2({ Bucket: req.params.name })
      .promise()
      .then(data => {
        return res.status(200).json(data);
      })
      .catch(err => {
        return res.status(400).json({ error: err });
      });
  }

  async delete(req, res) {
    const bucket = new AWS.S3();
    const { name, file } = req.body;
    await bucket
      .deleteObject({ Bucket: name, Key: file })
      .promise()
      .then(data => {
        return res.status(200).json({ success: 'object deleted' });
      })
      .catch(err => {
        return res.status(400).json({ error: err });
      });
  }
}

export default new S3();
