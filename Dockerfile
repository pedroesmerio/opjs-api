FROM node:18.2-alpine

WORKDIR /usr/api
COPY package*.json .
ENV DATABASE_URI=mongodb://db:27017
RUN npm install
COPY . .
RUN npm run build
CMD npm start
