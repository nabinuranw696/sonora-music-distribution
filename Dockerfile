FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
COPY server/package*.json server/
RUN npm install -w server  # switch to `npm ci` once package-lock.json is committed
COPY server server
RUN npx -w server prisma generate && npm run build -w server

FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app
USER node
EXPOSE 4000
CMD ["sh","-c","npx -w server prisma migrate deploy && node server/dist/index.js"]
