# API de comunicação com o serviço AWS S3

## Para utilizar da API de comunicação, basta chamar as requisições HTTP via postman ou insomnia

### Upload File:

`POST /s3/upload {header: name, multipart: file}`<br>

### Create Bucket:

`POST /s3 {body: name}`<br>

### List Buckets:

`GET /s3`<br>

### Delete Buckets:

`DELETE /s3 {body: name}`<br>

### Delete Bucket Files:

`DELETE /S3 {body: name, file}`

## Instalação

`yarn install`

## Utilização

`yarn dev`
