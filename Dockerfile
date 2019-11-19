FROM node:10-alpine@sha256:b930ae34213b9bcda4ab598d16159cc2acfd5b26342eff536807d99106f4dd84

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
