import s3 from './services/aws/s3';

class App {
  constructor() {
    this.s3();
  }

  s3() {
    // s3.create('novo-bucket-ufc-quixada');
    // O arquivo deve estar na pasta /resources
    // s3.upload('AWS.py', 'novo-bucket-ufc-quixada');
    // s3.index();
    // s3.delete('novo-bucket-ufc-quixada');
  }
}

export default new App();
