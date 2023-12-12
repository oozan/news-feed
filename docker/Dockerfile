# Build Stage
FROM node:16.14.0-alpine as builder

ENV NODE_ENV development
RUN apk add --update --no-cache python3 make g++ && ln -sf python3 /usr/bin/python

COPY . /app
WORKDIR /app

# Explicitly copy package files
COPY package.json ./

RUN npm ci --quiet
RUN npm run build
RUN npm ci --only=production -w backend --ignore-scripts

# Display the contents of the build directory
RUN ls -al /app/build

# Production Stage
FROM node:16.14.0-alpine

ENV NODE_ENV production

WORKDIR /app

# Copy from the build stage
COPY --from=builder /app/build /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/packages/types /app/node_modules/@local/types

CMD [ "node", "/app/server/main.js" ]

EXPOSE 4000
