FROM node:20
RUN git clone https://github.com/Astropeda/Asta-Md /root/Astropeda
RUN npm install
WORKDIR /root/Astropeda
EXPOSE 3000
CMD ["npm","start" ]
