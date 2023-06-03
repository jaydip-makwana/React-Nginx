# Node Image
FROM node:alpine as node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run start


RUN npm run build


# Nginx

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=node /app/build ./

ENTRYPOINT [ "nginx","-g","daemon off;" ]