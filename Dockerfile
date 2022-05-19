FROM node:12.18.2 
RUN apt-get update

WORKDIR /app

COPY . . 
 
WORKDIR /app/yellowpages_api
RUN npm install

EXPOSE 8000
CMD [ "sh","-c", "node index.js" ]