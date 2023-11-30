# Use the official Node.js image
FROM node:16.14.0-alpine as builder

ENV NODE_ENV development
RUN apk add --update --no-cache python3 make g++ && ln -sf python3 /usr/bin/python

WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet

COPY . .
RUN npm run build

# Production image
FROM node:16.14.0-alpine

ENV NODE_ENV production

WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY package*.json ./
RUN npm ci --only=production

CMD ["node", "/app/dist/main.js"]

EXPOSE 4000
