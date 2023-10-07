FROM node:20

WORKDIR /app

COPY /dist .

EXPOSE 4200

CMD ["npx", "http-server", "-p", "4200"]

