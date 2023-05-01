FROM node:8-slim

WORKDIR /app

COPY . /app/
CD /app/client
RUN npm install
CD ..
RUN npm install
EXPOSE 3000

CMD ["npm","run","dev"]
