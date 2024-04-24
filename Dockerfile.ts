FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/Astropeda/Asta-Md /root/Astropeda
WORKDIR /root/Astropeda
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
