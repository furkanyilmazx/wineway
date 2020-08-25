# WineWay APP

WineWay app developed as hobby project.

[![Netlify Status](https://api.netlify.com/api/v1/badges/1a02614b-e92f-4bb3-9540-174a7fec3f38/deploy-status)](https://app.netlify.com/sites/wineway/deploys)

## LIVE DEMO 
You can find out live demo on [URL](https://wineway.netlify.app/)

## Usage

Clone repository with one of the following ways and start coding.

with HTTPS:

```shell
git clone https://github.com/furkanyilmazx/wineway.git
```

with SSH:

```shell
git clone git@github.com:furkanyilmazx/wineway.git
```

## Install Dependencies
```shell
yarn
```
## Start to Development
```shell
yarn start
```

## Build to Production
```shell
yarn build
```

## Deployment

### Build as Docker image
```shell
docker build --rm -t wineway .
```
### Run as a Docker container
```shell
docker run -di --name wineway -p 8888:80 wineway
```
### Install from Docker hub
```shell
docker pull furkanyilmaz/wineway:latest
docker run -di --name wineway -p 8888:80 furkanyilmaz/wineway:latest
```

### Open App on local (Dockerized App)

[Open Local](http://localhost:8888/)