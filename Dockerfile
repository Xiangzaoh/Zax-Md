FROM node:16
RUN git clone https://github.com/Astropeda/Asta-Md /root/Astropeda
RUN apt-get update && apt-get install -y git
RUN yarn install
RUN npm install
WORKDIR /root/Astropeda
EXPOSE 3000
CMD ["npm","start" ] 
