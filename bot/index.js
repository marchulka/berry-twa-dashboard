import { Bot } from 'grammy';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

console.log('Environment variables:', {
  BOT_TOKEN: process.env.BOT_TOKEN ? 'Present' : 'Missing',
  WEBAPP_URL: process.env.WEBAPP_URL || 'Missing',
  PORT: process.env.PORT || 'Missing'
});

const bot = new Bot(process.env.BOT_TOKEN);
const app = express();

// Middleware для парсинга JSON
app.use(express.json());

// Настройка CORS для TWA
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.WEBAPP_URL);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Обработчик команды /start
bot.command('start', async (ctx) => {
  console.log('Received /start command');
  try {
    await ctx.reply('Добро пожаловать в LMS платформу! Нажмите кнопку ниже, чтобы открыть личный кабинет:', {
      reply_markup: {
        inline_keyboard: [[
          { 
            text: '🎓 Открыть личный кабинет', 
            web_app: { url: process.env.WEBAPP_URL }
          }
        ]]
      }
    });
    console.log('Sent welcome message with button');
  } catch (error) {
    console.error('Error sending welcome message:', error);
  }
});

// Эндпоинт для проверки работы сервера
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Запуск бота и сервера
const start = async () => {
  try {
    // Запускаем бота в режиме long polling
    console.log('Starting the bot...');
    await bot.start();
    console.log('Bot started successfully');

    // Запускаем Express сервер
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error occurred during bot startup:', error);
  }
};

start(); 