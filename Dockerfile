FROM node

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

ENTRYPOINT [ "npm", "start" ]