#this first step install node package libs for use next steps and optmize build
FROM node:12-stretch as libs
WORKDIR /home/libs
COPY package*.json ./
RUN npm i

FROM node:12-stretch as builder

WORKDIR /home/app

COPY . .
COPY --from=libs /home/libs/node_modules ./node_modules

RUN npm run build-docker

FROM nginx:1.19

COPY --from=builder /home/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 81

ENTRYPOINT ["nginx", "-g", "daemon off;"]
