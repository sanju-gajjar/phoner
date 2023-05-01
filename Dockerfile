FROM node:8-slim

WORKDIR /app

COPY . /app/

RUN npm install && npm install:client

EXPOSE 3000

CMD ["npm","run","dev"]
