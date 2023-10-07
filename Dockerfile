FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm config set fetch-retry-maxtimeout 600000000

RUN npm install --prefer-offline --no-audit

COPY . .

RUN npm run build

EXPOSE 4576

CMD ["npm", "start"]
