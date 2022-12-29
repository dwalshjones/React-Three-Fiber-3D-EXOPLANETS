FROM node:12.14.1

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

CMD ["npm", "start"]

