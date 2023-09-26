FROM node:20-alpine

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci
RUN npm install
COPY . /usr/src/app
RUN npm run build
EXPOSE 3000
