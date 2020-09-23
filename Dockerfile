#stage1
FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

#stage2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/saudedohomemapp /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

## docker build -t image-angular .
## docker run -p 8080:80 image-angular