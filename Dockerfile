FROM alpine:latest

WORKDIR /app

COPY /dist/guilmor .

EXPOSE 4200

CMD ["npx", "http-server", "-p", "4200"]

