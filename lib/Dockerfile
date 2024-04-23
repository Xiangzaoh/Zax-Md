FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Astropeda/Asta-Md /root/Astropeda
WORKDIR /root/Astropeda/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
