# loevdal.no

[![Build Status](https://drone.fap.no/api/badges/hakloev/loevdal/status.svg)](https://drone.fap.no/hakloev/loevdal)

### Usage

A local `.env` file is used to set the required environment variables. `docker-compose.yml` contains an example container composition, and can be used for development together with `npm run start:dev`  

### Files

`Static.Dockerfile`: nginx container used to serve Django's static files and React bundles.
`Django.Dockerfile`: The Django application

### __Useful commands__:

```
docker ps
docker exec -it CONTAINER_ID bash
docker build --tag MY_TAG:latest .
docker run --publish 80:8000 MY_TAG:latest

docker-compose down
docker-compose up -d # daemon
docker-compose -f FILENAME.yml up --build

pipenv shell # activate virtualenv
pipenv install 
pipenv install PACKAGE
```
