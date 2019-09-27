import s3 from './services/aws/s3';

class App {
  constructor() {
    this.s3();
  }

  s3() {
    // s3.create('bucket-do-denys');
    // O arquivo deve estar na pasta /resources
    // s3.upload('AWS.py', 'bucket-do-denys');
    s3.index();
    // s3.delete('novo-bucket-ufc-quixada');
  }
}

export default new App();
