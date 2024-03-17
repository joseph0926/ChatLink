FROM node:21-alpine3.18 as builder

ARG NPM_TOKEN

WORKDIR /app

RUN echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" > .npmrc && \
    echo "@joseph0926:registry=https://npm.pkg.github.com/joseph0926" >> .npmrc

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install -g npm@latest
RUN npm ci && npm run build

FROM node:21-alpine3.18

WORKDIR /app
RUN apk add --no-cache curl

COPY package*.json ./
COPY tsconfig.json ./
COPY --from=builder /app/.npmrc ./.npmrc

RUN npm install -g pm2 npm@latest
RUN npm ci --production

COPY --from=builder /app/build ./build

RUN rm -f .npmrc

EXPOSE 3002

CMD [ "npm", "run", "start" ]
