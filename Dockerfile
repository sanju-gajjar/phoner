FROM node:8-slim

WORKDIR /app

COPY . /app/
WORKDIR /app/client
RUN npm install
WORKDIR /app
RUN npm install
EXPOSE 3000

CMD ["npm","run","dev"]
