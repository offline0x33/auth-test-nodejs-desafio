# 🔐 Serviço de Autenticação

Bem-vindo ao serviço de autenticação! Este projeto é um sistema robusto e seguro de autenticação construído com Node.js, Express e Sequelize. Inclui funcionalidades como registro de usuários, login, autenticação baseada em JWT e muito mais. Seja você um desenvolvedor iniciando um novo app ou aprimorando um existente, este serviço é perfeito para você.

## 📋 Índice

- [Funcionalidades](#funcionalidades)
- [Começando](#começando)
- [Uso](#uso)
- [Scripts](#scripts)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Dependências](#dependências)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🚀 Funcionalidades

- Registro e Login de Usuários
- Hashing de Senhas com Bcrypt
- Autenticação baseada em JWT
- Suporte a Docker para Fácil Implantação
- Validação de Entrada com Validator
- Integração com Cloudinary para Gerenciamento de Mídia
- Rastreamento de Endereço IP

## 🏁 Começando

Para obter uma cópia local em funcionamento, siga estes passos simples.

### Pré-requisitos

- Node.js
- Docker (opcional, para conteinerização)

### Instalação

### Clone o repositório:

```
git clone https://github.com/seuusuario/authentication.git
cd authentication
```

###  Execute nvm para ajustar a versao do nodejs
```sh
    nvm use
```

### Install NPM packages:

```sh 
    yarn
```

### Crie um arquivo .env no diretório raiz e adicione suas variáveis:

### Example .env file
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
DB_NAME=authentication
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### Suba a base dados MariaDB no container docker

```sh
    yarn compose-up
```

### Executando o Serviço

Para desenvolvimento usando nodemon na porta 8089:
```sh
    yarn run dev
```

Para produção:
```sh
    yarn start
```

Com o serviço levantado voce pode abrir o navegador e terá acesso a pagina de login.

### Endpoints da API

    POST /register: Registrar um novo usuário
    POST /v1/user/login: Fazer login de um usuário existente
    GET /user/info: Obter o perfil do usuário (requer autorização)
    GET /usr/logout: Realiza o logout do usurio e coloca o token jwt na blacklist (requer autorização)
    
### Exemplo de Requisição
```sh
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "usuarioTeste",
    "password": "senhaTeste",
    "email": "teste@exemplo.com"
  }'
```

### 📜 Scripts

   - npm run compose-up: Iniciar o serviço usando Docker Compose
   - npm run dev: Iniciar o serviço em modo de desenvolvimento
   - npm start: Iniciar o serviço em modo de produção
   - npm run format: Formatador o código usando Prettier
   - npm run docker: Iniciar o serviço usando Docker e stack.yml

### 🛠 Variáveis de Ambiente

Certifique-se de definir as seguintes variáveis de ambiente no seu arquivo .env:
dentro do arquivo docker-compose.yml você pode encontrar dados para acessar o banco de dados se preferir usar o docker.
   
    
   - NODE_ENV: indica se vai pegar o env de producao(.env.production) ou desenvolvimento(.env.developmente)
   - DB_HOST: Host do banco de dados
   - DB_PORT: porta padrão 3306
   - DB_USERNAME: Usuário do banco de dados
   - DB_PASSWORD: Senha do banco de dados
   - DB_DATABASE: Nome do banco de dados
   - JWT_SECRET: Chave secreta do JWT

### 📦 Dependências
Principais

   - authenticator: ^1.1.5
   - axios: ^0.19.0
   - bcrypt: ^3.0.6
   - cloudinary: ^1.15.0
   - date-period: ^2.5.0
   - express: ^4.17.1
   - express-ip: ^1.0.3
   - jsonwebtoken: ^8.5.1
   - moment: ^2.24.0
   - mysql2: ^1.7.0
   - prettier: ^3.3.2
   - read-markdown: ^1.0.2
   - sequelize: ^5.19.0
   - validator: ^11.1.0

### Desenvolvimento

   - dotenv: ^8.1.0
   - eslint: ^6.4.0
   - eslint-config-airbnb-base: ^14.0.0
   - esm: ^3.2.25
   - nodemon: ^1.19.2

### 🤝 Contribuindo

Contribuições, problemas e solicitações de funcionalidades são bem-vindos! Sinta-se à vontade para verificar a página de issues. Se você tiver quaisquer perguntas ou sugestões, não hesite em abrir uma issue ou enviar um pull request.
📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

# Feliz codificação! 😃