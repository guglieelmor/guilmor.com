FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm config set timeout 6000000

RUN npm install --prefer-offline --no-audit

RUN npm install -g @angular/cli

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
