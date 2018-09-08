FROM node:10-alpine@sha256:1e7d71edcd8088bd81a828a6ea6d8be6dbf92039bbd9e2ecf2eb76abd295f832

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
