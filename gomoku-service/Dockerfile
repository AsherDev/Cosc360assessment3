FROM node:16-alpine

WORKDIR /gomoku-service

ADD ./package.json ./
ADD ./package-lock.json ./
ADD ./tsconfig.json ./
ADD ./.env ./

RUN npm install

RUN npm install mongoose
RUN npm install zod
RUN npm install jsonwebtoken


CMD ["npm", "run", "dev"]
