// Создать переводчик слов с английского на русский, который будет обрабатывать входящие GET запросы 
// и возвращать ответы, полученные через API Яндекс.Переводчика

const request = require("request");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите текст для перевода: ', (word) => {
    request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200127T123649Z.3798790b00cb26e1.6223d07ce4e7b9ccc9f7efcb3ad7ea7c02f28593&lang=en-ru&text=${word}`,
        (err, response, body) => {
            if (!err && response.statusCode === 200) {
                const translate = JSON.parse(body);
                console.log(translate.text[0]);
            }
            else if (err) {
                console.log("Ошибка перевода: ", err);
            }
            else console.log("Ошибка");
    });
    rl.close();
});