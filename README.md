# Atividade Prática — MongoDB com Docker

Configuração de um banco de dados MongoDB local utilizando Docker Compose e conexão com Node.js por meio do Mongoose.

Atividade da disciplina **Linguagens e Tecnologias para Desenvolvimento Web**, para preparar o ambiente de banco de dados do trabalho final com a stack MERN.

## Pré-requisitos

- Docker Desktop instalado e em execução
- Node.js e NPM
- Editor de código (recomendado: VS Code)

## Estrutura do projeto

- `docker-compose.yml`: configura o MongoDB 6, a porta `27017` e o volume de dados.
- `db.js`: contém a função de conexão com o MongoDB usando Mongoose.
- `package.json` e `package-lock.json`: registram as dependências do projeto.
- `.gitignore`: evita o envio de `node_modules/` e `.env` ao repositório.

## Execução

1. Clone o repositório e acesse sua pasta:

   ```bash
   git clone https://github.com/IgorMoraesTech/atividade-mongo-docker.git
   cd atividade-mongo-docker
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com:

   ```env
   MONGO_URI=mongodb://localhost:27017/trabalho_final
   ```

4. Com o Docker Desktop em execução, inicie o banco:

   ```bash
   docker compose up -d
   ```

5. Confira o contêiner:

   ```bash
   docker compose ps
   ```

6. Teste a conexão com o MongoDB:

   ```bash
   node --input-type=module -e "import {connectDatabase} from './db.js'; import mongoose from 'mongoose'; await connectDatabase(); await mongoose.disconnect();"
   ```

   Resultado esperado:

   ```text
   Aguarde, tentando conectar ao banco de dados...
   Conexão estabelecida! MongoDB Local (via Docker) conectado.
   ```

7. Para encerrar o ambiente:

   ```bash
   docker compose down
   ```

O volume nomeado mantém os dados do MongoDB ao encerrar e recriar o contêiner com esses comandos.

## Escopo

Este repositório contém apenas a **configuração do MongoDB com Docker e a conexão via Mongoose**. Não inclui interface React nem uma API CRUD completa, que fazem parte de etapas posteriores do projeto MERN.

O arquivo `.env` é local e não deve ser publicado no GitHub.
