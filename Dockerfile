FROM node:latest

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

ENV PORT=3000
ENV DATABASE_URL=mongodb://mongo:27017/sentences

EXPOSE 3000

CMD ["npm", "start"]
