FROM node:alpine

COPY . /app
WORKDIR /app
RUN npm install

EXPOSE 6996

ENTRYPOINT ["npm", "start"]

# docker run -d --name primordial -p 6996:6996 tripdubroot/primordial
