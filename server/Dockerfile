# Requires node:18-alpine as the base image for Dockerizing the Node.js application
FROM node:18-alpine
# It installs the nodemon package for monitoring the Express server
RUN npm install -g nodemon
# Creating the working directory
WORKDIR /app
# Copying the dependencies in the package.json file
COPY package.json /app
#Installing all the dependencies
RUN npm install
#Copying all the files to the working directory
COPY . /app
RUN npm install && npm install --prefix client
#Command to start the Docker container Node.js application
CMD ["npm", "run", "dev"]