FROM node:14-alpine as app-builder

WORKDIR /app

COPY . /app

RUN apk update && apk upgrade && apk add --no-cache bash
RUN apk add --update python krb5 krb5-libs gcc make g++ krb5-dev

RUN yarn install
RUN yarn build

FROM nginx:1.19-alpine as app-server

RUN apk add --no-cache bash

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=app-builder /app/build /var/www/html

EXPOSE 80

ENTRYPOINT [ "bash", "/nginx-entrypoint.sh" ]
