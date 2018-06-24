FROM node:10-alpine

RUN apk update

RUN mkdir -p /app/
RUN mkdir -p /app/src

WORKDIR /app

ADD package.json /app/package.json
RUN yarn install --no-lockfile --silent

ADD src /app/src

EXPOSE 4000

CMD ["yarn", "run", "dev"]
