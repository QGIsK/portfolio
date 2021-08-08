FROM node:alpine

RUN mkdir -p /usr/src/portfolio && chown -R node:node /usr/src/portfolio

WORKDIR /usr/src/portfolio

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000
