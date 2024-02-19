FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app/react-vite

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as PRODUCTION_IMAGE

WORKDIR /app/react-vite

COPY --from=BUILD_IMAGE /app/react-vite/dist/ /app/react-vite/dist/

EXPOSE 5173

COPY package.json .

COPY vite.config.ts .

RUN npm install typescript

EXPOSE 5173

CMD ["npm", "run", "preview"]

