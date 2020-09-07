FROM node:dubnium-alpine
WORKDIR /var/www/node/api
COPY ./ ./
RUN npm install -g yarn forever --force && \
  yarn install --production --force
USER node
EXPOSE 3000
CMD ["forever", "app.js"]  
