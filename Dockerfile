FROM node:19-alpine as build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:19-alpine as production-stage

WORKDIR /app

RUN npm install -g serve

COPY --from=build-stage /app/dist /app/dist

EXPOSE 4040 

ENTRYPOINT ["serve", "-s", "./dist", "-l", "4040"]
