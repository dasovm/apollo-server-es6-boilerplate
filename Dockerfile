FROM node:10-alpine@sha256:ca59a7a6abfdfe8f2fb62b14c24be5eac33a0acda20fd3d5e5bf2a942de57bad

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
