FROM node:10-alpine@sha256:33f5bbe3873636841e3f0499b208379e122f4e2ba94d9df6db59035a11e4938e

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
