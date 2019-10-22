# Docker Compose Code Challenge

### WIP

### Installation

Requirements:

* Docker
* Docker compose
* Node
* NPM
* Suggested OS: Linux/Mac

### Execution

Start:
``docker-compose up``

Stop:
``docker-compose down``

Remove:
``docker-compose rm``
``docker volume rm dockercomposechallenge_data-volume``

### Known bugs

First startup of the docker containers will result in adminMongo connecting too soon :(
You may need to run
``docker-compose restart mongodbadmin``