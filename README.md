# Docker Compose Code Challenge

### Summary

This repository consists of 4 docker-compose services:
* Nginx web server
* NodeJS app server
* AdminMongoDB server
* MongoDB server

### Requirements:

* Docker 18.06.0+
* Docker composer
* Node
* NPM
* Suggested OS: Linux/Mac

### Installation

1) Clone repository:

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
Raw data: http://localhost:8080/data

5) Visit mongodb admin panel: http://localhost:8081

### Execution

* Start containers:
```$ docker-compose up```

* Stop containers:
```$ docker-compose down```

* Remove containers data:
```$ docker-compose rm && docker volume rm dockercomposechallenge_data-volume```

### Known bugs

First startup of the docker containers will result in adminMongo connecting too soon. MongoDB restarts after the first initialisation, this affects the depends-on feature in the composer.
You may need to run:
``
$ docker-compose restart mongodbadmin
``

### Developed On

* Docker version 19.03.4, build 9013bf5
* docker-compose version 1.24.1, build 4667896b
* NodeJS (Dependencies: express and mongodb)
* Nginx, MongoDB, AdminMongoDB

### Screenshots

![Screenshot 1](https://i.imgur.com/3TD9PkR.png "Screenshot 1")
![Screenshot 2](https://i.imgur.com/3VXgaO3.png "Screenshot 2")
![Screenshot 3](https://i.imgur.com/jqQ9Wgu.png "Screenshot 3")
