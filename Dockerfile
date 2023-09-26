FROM node:20-alpine
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node package.json /usr/src/app/package.json
COPY --chown=node:node package-lock.json /usr/src/app/package-lock.json
RUN npm ci
COPY --chown=node:node . /usr/src/app
RUN npm run build
EXPOSE 3000
