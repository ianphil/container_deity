FROM node:alpine

COPY . /app
WORKDIR /app
RUN npm install

EXPOSE 6996

CMD ["npm", "start"]

# docker run -d --name deity -v /var/run/docker.sock:/var/run/docker.sock -p 6996:6996 tripdubroot/deity
