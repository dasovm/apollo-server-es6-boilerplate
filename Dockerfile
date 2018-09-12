FROM node:10-alpine@sha256:260b6f423242b7ac5e9b476ef25f26d72d1b55353a5c9be039c91398388cdd50

RUN apk update

RUN mkdir -p /app/
RUN mkdir -p /app/src

WORKDIR /app
ADD .babelrc /app/.babelrc

ADD package.json /app/package.json
RUN yarn install --no-lockfile --silent

ADD src /app/src

RUN yarn build
RUN rm -rf /app/src

EXPOSE 4000

CMD ["yarn", "start"]
