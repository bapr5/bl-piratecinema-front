FROM node:23-alpine
EXPOSE 3000
WORKDIR /app
COPY /app /app
RUN npm install
RUN npm run build
CMD ["npm", "start"]