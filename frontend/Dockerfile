FROM node:14.15.0-alpine3.12

WORKDIR /app

ENV LANG C.UTF-8 \
    TZ Asia/Tokyo \

RUN apt-get update -y && \
    apt-get upgrade -y && \
    npm i

ENV HOST 0.0.0.0

EXPOSE 8000

ADD . /app