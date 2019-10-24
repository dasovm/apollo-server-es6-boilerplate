FROM node:10-alpine@sha256:7154487de8a87768b25b1162cc33da9f68c1a6480274345b798e7792c54cb873

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
