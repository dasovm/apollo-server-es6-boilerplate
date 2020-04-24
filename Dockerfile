FROM node:10-alpine@sha256:5f7b415e8a4a0cbc6691ed63337ae9cf1c9cd8947a5cee8b84e3c9342706005b

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
