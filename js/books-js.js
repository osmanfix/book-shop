// https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyC-DYFCO_fkGyJWzeGeM1KQuhaVipJesh0&printType=books&startIndex=0&maxResults=6&langRestrict=ru



// Создаем экзепляр класса XMLHttpRequest
let xhr = new XMLHttpRequest();
// Инициализируем запрос
xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyC-DYFCO_fkGyJWzeGeM1KQuhaVipJesh0&printType=books&startIndex=0&maxResults=6&langRestrict=ru');

// Добавляем обрабочик ответа сервера
xhr.onload = function() {
  if (xhr.status != 200) { // HTTP ошибка?
    // Если статус не 200 (указывает, что запрос выполнен успешно),
    // то обрабатываем отдельно
    console.log('Статус ответа: ', xhr.status);
  } else {
    // Ответ мы получаем в формате JSON, поэтому его надо распарсить
    // console.log('Ответ сервера JSON', xhr.response);

    // Парсим и выводим ответ сервера
    console.log('Результат: ', JSON.parse(xhr.response));
  }
};

// Добавляем обрабочик процесса загрузки
xhr.onprogress = function(event) {
  // Выведем прогресс загрузки
  console.log(`Загружено ${event.loaded} из ${event.total}`)
};

// Добавляем обрабочик ошибки
xhr.onerror = function() {
  // обработаем ошибку, не связанную с HTTP (например, нет соединения)
  console.log('Ошибка! Статус ответа: ', xhr.status);
};

// Отправляем запрос
xhr.send();

