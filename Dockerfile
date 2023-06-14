FROM nginx:latest

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./getip.js /usr/share/nginx/html/getip.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
