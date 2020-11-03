Шарифуллина Александра

Домашнее задание 8.2

<h1>Hooks & Context API</h1>

<h2>useJsonFetch</h2>

Реализуйте кастомный хук useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:

const [data, loading, error] = useJsonFetch(url, opts);

где:
<ul>
  <li>data - данные, полученные после response.json() (не Promise, а именно данные)</li>
  <li>error - ошибка (ошибка сети, ошибка ответа - если код не 20x, ошибка парсинга - если пришёл не JSON)</li>
  <li>loading - boolean флаг, сигнализирующий о том, что загрузка идёт</li>
</ul>

Покажите использование этого хука на примере трёх компонентов, каждый из которых делает запросы на следующие адреса (backend возьмите из каталога backend):
<ul>
  <li>GET http://localhost:7070/data - успешное получение данных</li>
  <li>GET http://localhost:7070/error - получение 500 ошибки</li>
  <li>GET http://localhost:7070/loading - индикатор загрузки</li>
</ul>

Исходное задание:
https://github.com/netology-code/ra16-homeworks/tree/master/hooks-context/use-json-fetch
