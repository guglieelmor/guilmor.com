FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
