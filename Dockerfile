FROM node:18-alpine as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:18-alpine as runtime

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["npm", "run", "start"]