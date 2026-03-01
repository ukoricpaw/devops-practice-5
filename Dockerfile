FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM node:18-alpine as runtime

WORKDIR /app

COPY package*.json ./

COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["npm", "run", "start"]