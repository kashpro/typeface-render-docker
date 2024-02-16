FROM node:18.19.1-alpine3.19

WORKDIR /app/

# RUN apk add imagemagick=7.1.1 не нужна пока

RUN apk update

RUN apk add graphicsmagick=1.3.42-r0

# RUN apk add mc не нужна пока

RUN npm i -g nodemon@3.0.3

COPY ./package*.json ./

RUN npm i

COPY ./ ./

CMD [ "npm", "run", "start" ]