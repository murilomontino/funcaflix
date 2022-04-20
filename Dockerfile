FROM node:16.14.2-alpine3.14

USER node

WORKDIR /home/node/app

COPY package*.json .

EXPOSE 3000

RUN yarn install

COPY . .

ENTRYPOINT [ ".docker/entrypoint.sh" ]
