# Docker Compose Code Challenge

### Summary

This repo consists of 4 docker-compose services:
* nginx (All HTTP communication)
* node application (Accessible via nginx port 8080)
* adminMongodb (Accessible via nginx port 8081)
* mongodb

### Requirements:

* Docker 18.06.0+
* Docker composer
* Node
* NPM
* Suggested OS: Linux/Mac

### Installation

1) Clone repository

```
$ git clone https://github.com/dansali/DockerComposeChallenge.git
```
2) Start container instances:

```
$ docker-compose up -d
```
3) If first time starting, wait 20 seconds and execute (more info below):

```
$ docker-compose restart mongodbadmin
```
4) Visit application: http://localhost:8080

5) Visit mongodb admin panel: http://localhost:8081

### Execution

* Start containers:
```$ docker-compose up```

* Stop containers:
```$ docker-compose down```

* Remove containers data:
```$ docker-compose rm && docker volume rm dockercomposechallenge_data-volume```

### Known bugs

First startup of the docker containers will result in adminMongo connecting too soon :(
You may need to run:
``
$ docker-compose restart mongodbadmin
``

### Developed On

* Docker version 19.03.4, build 9013bf5
* docker-compose version 1.24.1, build 4667896b
* NodeJS (Dependencies: express and mongodb)
* Nginx, MongoDB, AdminMongoDB
