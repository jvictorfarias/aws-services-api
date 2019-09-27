/* eslint-disable no-console */
import aws from 'aws-sdk';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

class S3 {
  async upload(fileName, bucketName) {
    const bucket = new aws.S3();

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'resources',
      fileName
    );
    const file = await promisify(fs.readFile)(filePath);
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: file,
    };

    try {
      const data = await bucket.upload(params).promise();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async create(bucketName) {
    const bucket = new aws.S3();
    try {
      await bucket.createBucket({ Bucket: bucketName }).promise();
    } catch (err) {
      console.log(err);
    }
  }

  async index() {
    const bucket = new aws.S3();
    try {
      const data = await bucket.listBuckets().promise();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async delete(bucketName) {
    const bucket = new aws.S3();

    // Need fix
    try {
      await bucket
        .deleteObjects({ Bucket: bucketName })
        .then(await bucket.deleteBucket({ Bucket: bucketName }).promise());
    } catch (err) {
      console.log(err);
    }
  }
}

export default new S3();
