# Build stage
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Production stage
FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["index.js"] 