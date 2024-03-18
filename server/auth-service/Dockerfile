FROM node:21-alpine3.18 as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

RUN npm install -g npm@latest
RUN npx prisma generate
RUN npm ci && npm run build

FROM node:21-alpine3.18

WORKDIR /app
RUN apk add --no-cache curl

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma

RUN npm install -g pm2 npm@latest
RUN npx prisma generate
RUN npm ci --production

COPY --from=builder /app/build ./build

EXPOSE 3002

CMD [ "npm", "run", "start" ]
