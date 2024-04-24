FROM node:16
RUN git clone https://github.com/Xiangzaoh/Zax-Md /root/Xiangzaoh
RUN apt-get update && apt-get install -y git
RUN yarn install
RUN npm install
WORKDIR /root/Xiangzaoh
EXPOSE 3000
CMD ["npm","start" ] 
