FROM node:16-alpine
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json ./
ENV NODE_ENV=development
RUN yarn install
CMD ["yarn","dev"]
EXPOSE 80
