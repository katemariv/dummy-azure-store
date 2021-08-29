FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY azure-client/ ./azure-client/
RUN cd azure-client && npm install && npm run build

FROM node:14 AS server-build
WORKDIR /usr/src/app
COPY --from=ui-build /usr/src/app/azure-client/build ./azure-client/build
COPY azure-server/package*.json ./azure-server/
RUN cd azure-server && npm install
COPY azure-server/*.js ./azure-server/

EXPOSE 3000 8080

CMD ["node", "./azure-server/api.js"]