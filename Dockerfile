FROM node:10-alpine@sha256:5cf3bedcacc2b6ae46504c4c165c74ae88b5fb5eb67f9dfcc3b0cca193f366ff

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
