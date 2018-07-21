FROM node:10-alpine@sha256:9787e45382cb61f65068dbb1ef58337888f55f51f4dfc9455643a1db44da71a4

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
