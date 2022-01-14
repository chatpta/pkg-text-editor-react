FROM node:alpine as builder
COPY . /front
WORKDIR /front
RUN npm install
RUN npm run build

FROM nginx:1.15-alpine
COPY --from=builder /front/build       /usr/share/nginx/html
COPY --from=builder /front/nginx.conf  /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
