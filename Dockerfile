FROM alpine:latest

WORKDIR /app

RUN apk update && apk add nodejs npm

COPY /dist/guilmor .

EXPOSE 4200

CMD ["npx", "http-server", "-p", "4200"]

