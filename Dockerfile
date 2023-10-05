FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm config set fetch-retry-maxtimeout 6000000

# RUN npm install --prefer-offline --no-audit

COPY . .

# RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
