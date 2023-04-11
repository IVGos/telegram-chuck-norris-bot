# Телеграм-Бот шуток Чака Норриса

## Pre-Release

Ознакомиться с видео [примером реализации бота](https://www.youtube.com/watch?v=VnSQBymw4ng)

Изучи готовый класс `ChuckNorris`. В нем можно получать шутки.

## Release 0

Написать телеграм бота, который по команде `/joke` отоброзить шутку с Чак Норрисом.

## Release 1

Сделай проверку, в случае, если в шутке нет слова `'Chuck Norris'`, то такая шутка не отобразится и придет соответсвующее уведомление - 'Была получена невалидная шутка'.

## Release 2

Добавь возможность сохранения последней шутки в БД по команде `/save`. В ответе должно прийти сообщение - "Шутка сохранена". Добавь возможность получения всех сохраненных шуток по команде `/all`.

## Release 3

Проследи, чтобы по команде `/save` не сохранялись одинаковые шутки (метод Sequelize findOrCreate). В ответе должно прийти сообщение - 'Такая шутка уже существует'

## Release 4

Проследи, чтобы при сохранении записи в БД, их было не больше 10. В случае если их больше, то нужно удалить самую старую и вместо нее записать новую.
