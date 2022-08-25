FROM node:18
WORKDIR /numinata
COPY . .
RUN npm install
CMD ["node", "./server/server.js"]
EXPOSE 3000