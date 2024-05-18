const express = require('express');
const controllers = require('./src/controllers');

const server = express();

server.use('/users', controllers.users);
server.use('/posts', controllers.posts);
server.use('/health', controllers.health);

server.use((req, res) => {
	res.status(404).send(`\n
		Ответа не предусмотрено!
		Запрошенный путь: ${req.originalUrl}
	\n`)
});

server.listen(3000, () => {
    console.log(`
		Express API запущено, можно тыкать 3000 порт!

		Список ручек:
		
		/ping - проверка соединения с сервером

		/users - получение списка пользователей
		/users/<id> - получение конкретного пользователя

		/posts - получение списка постов 
		/posts/<id> - получение конкретного поста
	`);
});