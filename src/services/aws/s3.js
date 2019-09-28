/* eslint-disable no-console */
import aws from 'aws-sdk';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import multer from 'multer';

class S3 {
  // Fix to multipart form
  async upload(req, res) {
    const bucket = new aws.S3();
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
    const bucket = new aws.S3();
    const { name } = req.body;
    try {
      await bucket
        .createBucket({ Bucket: name })
        .promise()
        .then(() => {
          return res.status(200).json({ success: `bucket ${name} created` });
        })
        .catch(() => {
          return res.status(400).json({ error: 'failed to create bucket' });
        });
    } catch (err) {
      console.log(err);
    }
  }

  async index(req, res) {
    const bucket = new aws.S3();
    const data = await bucket.listBuckets().promise();

    if (!data) {
      return res.json(400).json({ error: 'not found' });
    }

    return res.status(200).json(data);
  }

  async delete(req, res) {
    /**
     * Missing good implementation
     */
  }
}

export default new S3();
