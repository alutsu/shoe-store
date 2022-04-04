FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./
EXPOSE 3000

CMD ["npm", "start"]