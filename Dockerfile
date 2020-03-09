# base image
FROM node:13.10

# set working directory
WORKDIR /zk-challenge
COPY . /zk-challenge

RUN npm install

EXPOSE 4200
CMD npm start
