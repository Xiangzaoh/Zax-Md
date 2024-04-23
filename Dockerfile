FROM node:20
RUN git clone https://github.com/Xiangzaoh/Swahili-Md /root/Xiangzaoh
RUN npm install
WORKDIR /root/Xiangzaoh
EXPOSE 3000
CMD ["npm","start" ]
