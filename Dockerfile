FROM node:12.14.1

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]

