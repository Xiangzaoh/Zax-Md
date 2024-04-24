FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/Xiangzaoh/Zax-Md /root/Xiangzaoh
WORKDIR /root/Xiangzaoh
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
