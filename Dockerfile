FROM node:10.14.2
RUN npm install --save express passport passport-google-oauth20@2 nodemon
EXPOSE 5000
COPY index.js .
CMD node index.js