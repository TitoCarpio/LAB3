FROM node:18
#Create app directory 
WORKDIR /app
#Install app dependencies
#A wildcard is used to ensure a both package.json and package-lock.json are copied
# where available (npm@5)
COPY package*.json ./

RUN npm install
#if you are building your code for production
# RUN npm ci --only=production
#Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "bin/www"]