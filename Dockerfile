FROM node:16.14.2-alpine3.14

USER node

WORKDIR /home/node/app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT [ ".docker/entrypoint.sh" ]
