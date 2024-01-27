FROM node:18-alpine

# Configure o diretório de trabalho no container
WORKDIR /app

COPY . .
# Exponha a porta 3000 para acessar o aplicativo React
EXPOSE 3000

RUN npm install

# Comando para iniciar o aplicativo React
CMD ["npm", "start"]


