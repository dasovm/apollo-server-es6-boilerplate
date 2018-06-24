# Apollo Server 2.0 ES6 Boilerplate

### Get Boilerplate
```shell
$ git clone https://github.com/dasovm/apollo-server-es6-boilerplate.git
$ cd apollo-server-es6-boilerplate
```

### Run locally

##### Run dev
```shell
$ yarn dev
```

##### Run prod
```shell
$ yarn serve
```

### Run with Docker
* `Dockerfile` used for production
* `Dockerfile-dev` used for development

##### Run dev
```shell
$ docker build -f Dockerfile-dev -t apolloserver .
$ docker run -itd -p 4000:4000 -v "$PWD/src":/app/src --rm --name=server apolloserver
```

##### Run prod
```shell
$ docker build -t apolloserver .
$ docker run -itd -p 4000:4000 --rm --name=server apolloserver
```

##### Follow logs from Docker
```shell
$ docker logs -f server
```

##### Stop Docker container
```shell
# does also remove the container
$ docker stop server
```
