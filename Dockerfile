FROM node:10-alpine

RUN mkdir /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000

CMD ["npm", "run", "dev"]
