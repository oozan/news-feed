# Build Stage
FROM node:16.14.0-alpine as builder

# Set environment variables
ENV NODE_ENV development

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S -D -H -u 1001 -G nodejs nodejs

# Switch to the non-root user
USER nodejs

# Set working directory
WORKDIR /app

# Copy only package files to leverage Docker cache
COPY ../../packages/backend/package.json ./
COPY ../../packages/backend/package-lock.json ./

# Install dependencies
RUN npm ci --quiet

# Install PostgreSQL client
RUN apk add --no-cache postgresql-client

# Copy the rest of the application
COPY . .

# Combine npm commands
RUN npm run build && npm ci --only=production -w backend --ignore-scripts

# Display the contents of the build directory
RUN ls -al /app/build

# Production Stage
FROM node:16.14.0-alpine

# Set environment variables
ENV NODE_ENV production

# Set working directory
WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S -D -H -u 1001 -G nodejs nodejs

# Switch to the non-root user
USER nodejs

# Start the application
CMD [ "node", "./build/main.js" ]

# Expose the application port
EXPOSE 4000
