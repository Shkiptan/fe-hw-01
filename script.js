'use strict';
/*Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.

  Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6.

  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.

  Необходимо проверить является ли введенные данные целым положительным числом. 
  Вывести alert с текстом "Ошибка ввода" в случае ошибочного ввода и прекратить выполнение скрипта.

  В случае валидного ввода, последовательно проверить кол-во мест в группах, 
  и кол-во необходимых мест введенных пользователем.
  Подсказка: начните с самой маленькой группы!

  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести пользователю сообщение через confirm, что есть место в группе такой-то, 
  согласен ли пользоваетель быть в этой группе?

  Если ответ да, уменьшаем число свободных мест на число участников группы и выводим alert с текстом,
  'Приятного путешествия в группе <имя группы>'.
  
  Если ответ нет, выводим alert с текстом "Нам очень жаль, приходите еще!".

  Если мест нигде нет, выводим alert с сообщением 'Извините, мест нет.'*/
  
  const GROUP_ONE = 'Taba';
  const GROUP_TWO = 'SHARM';
  const GROUP_THREE = 'HURGADA';

  const TABA = 6;
  const SHARM = 15;
  const HURGADA = 25;

  const userInput = prompt ('Введите количество человек, желающих отправиться в путешествие', '');
  const sitMount = Number (userInput);
  
  const isValidInput = sitMount > 0 && Number.isInteger(sitMount);
  console.log (isValidInput);

  if (isValidInput) {
    let haveSit;
    let group;
    let sitFree;

    switch (true) {
      case sitMount <= TABA:
        haveSit = true;
        group = GROUP_ONE;
        sitFree = TABA;
        break;

      case sitMount <= SHARM:
        haveSit = true;
        group = GROUP_TWO;
        sitFree = SHARM;
        break;

      case sitMount <= HURGADA:
        haveSit = true;
        group = GROUP_THREE;
        sitFree = HURGADA;
        break;

    default:
        haveSit = false;    

    }
       if (haveSit) {
          const agreement = confirm (`Есть место в группе ${group}. Подтверждаете ли путешествие в этой группе?`);

          if (agreement) {
            let restSit = sitFree - sitMount;
            alert (`Приятного путешествия в группе ${group}`);
        }
        else {
          alert ('Нам очень жаль, приходите еще!');
        }
    } else {
      alert ('Извините мест нет!');
    }
}else {
  alert ('Oшибка ввода');
    }



