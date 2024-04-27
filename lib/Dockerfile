FROM quay.io/xiangzaohtz/zax-md
RUN git clone https://github.com/Xiangzaoh/Zax-Md /root/Xiangzaoh
WORKDIR /root/Xiangzaoh/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]


