import mongoose from 'mongoose';
import 'dotenv/config'; // Ativa a leitura do arquivo .env

export const connectDatabase = async () => {
  try {
    console.log('Aguarde, tentando conectar ao banco de dados...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexão estabelecida! MongoDB Local (via Docker) conectado.');
  } catch (error) {
    console.error('Falha crítica de conexão. O Docker está rodando?', error.message);
    process.exit(1); // Encerra a aplicação em caso de falha severa no DB
  }
};
