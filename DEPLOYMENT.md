# Berry TWA Dashboard - Документация развертывания

## Текущая конфигурация

### Сервисы
1. **Frontend (berry-twa-dashboard)**
   - URL: https://berry-twa-dashboard-production.up.railway.app
   - Тип: React/Vite приложение
   - Автоматический деплой из main ветки

2. **База данных (expressjs-postgres)**
   - Тип: PostgreSQL
   - Подключение: railway.internal

3. **Telegram Bot интеграция**
   - WebApp URL настроен в BotFather
   - Кнопка "Личный кабинет" активна

### Переменные окружения
```
NODE_ENV=production
PORT=80
DATABASE_URL=postgres://postgres:postgres@expressjs-postgres.railway.internal:5432
REACT_APP_API_URL=https://nodejs-distroless-production-da81.up.railway.app
```

### Railway настройки
- Region: US West (California)
- Resources: 0.5 CPU, 8GB RAM, 8GB Page limit
- Автоматический деплой включен
- Wait for CI: Enabled
- Builder: Nixpacks (автоопределение)

### Сетевая конфигурация
- Public domain: berry-twa-dashboard-production.up.railway.app
- Internal domain: berry-twa-dashboard.railway.internal
- HTTPS: Enabled by default
- Metal Edge: Enabled

## Архитектура проекта
- React/Vite frontend
- Material UI компоненты
- PostgreSQL база данных
- Telegram WebApp интеграция

## Процедура деплоя
1. Push в main ветку
2. Автоматический деплой через Railway
3. Проверка доступности приложения
4. Проверка работы в Telegram боте

## Проверка работоспособности
1. Открытие WebApp в Telegram
2. Доступность всех страниц дашборда
3. Соединение с базой данных
4. Корректная работа UI компонентов 

## Бэкапы

### База данных
1. **Автоматические бэкапы**
   - Включены в Railway
   - Периодичность: ежедневно
   - Хранение: последние 7 дней

2. **Ручное резервное копирование**
   - Скрипт: `backup.ps1`
   - Хранит последние 5 бэкапов
   - Формат файлов: `db-backup-YYYY-MM-DD-HH-mm.sql`

### Процедура восстановления
1. Из автоматического бэкапа:
   - Railway Dashboard -> Database -> Backups
   - Выбрать нужную точку восстановления
   - Подтвердить восстановление

2. Из ручного бэкапа:
   ```sql
   psql $DATABASE_URL < backups/db-backup-YYYY-MM-DD-HH-mm.sql
   ```

### Важные заметки
- Проверять целостность бэкапов раз в неделю
- Хранить минимум одну копию локально
- Тестировать процедуру восстановления ежемесячно 