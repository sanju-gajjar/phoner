FROM node:8-slim

WORKDIR /app

COPY . /app/
RUN npm run heroku-postbuild
EXPOSE 3000

CMD ["npm","run","dev"]