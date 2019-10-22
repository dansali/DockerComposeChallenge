# Docker Compose Code Challenge

### Summary

This repo consists of 4 docker-compose services:
* nginx (All HTTP communication)
* mongodb
* adminMongodb (Accessible via nginx port 8081)
* node application (Accessible via nginx port 8080)

### Installation

Requirements:

* Docker 18.06.0+
* Docker composer
* Node
* NPM
* Suggested OS: Linux/Mac

### Execution

Start:
``docker-compose up -d``

Stop:
``docker-compose down``

Remove:
``docker-compose rm``

``docker volume rm dockercomposechallenge_data-volume``

### Known bugs

First startup of the docker containers will result in adminMongo connecting too soon :(
You may need to run
``docker-compose restart mongodbadmin``

### Docker information

This project was developed on docker versions:
* Docker version 19.03.4, build 9013bf5
* docker-compose version 1.24.1, build 4667896b