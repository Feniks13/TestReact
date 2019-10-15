let name = ['Ivan', 'Any', 'Sergey', 'DonaldDuck'];
// Метод фильтрации массива
let shortName = name.filter((name) => {
    return name.length < 5;    
})

console.log(name);
console.log(shortName);


// Метод трансфармирует каждый элемент массива и создаёт новый 
let answers = ['IvAn', 'AnnA', 'SeRgEy'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// Значения по умолчанию
function fetchData(data, count = 0) {
  console.log(`Данные: ${data} в количестве ${count}`);
  
}
fetchData('something');

// Рест оператор преобразует данные в массив (Сварачивае)
// Он должен быть один и в конце
function max (a, b, ...numbers) {
  console.log(numbers);
  
}
max(3, 65, 54, 2);    // a = 3, b = 65

// Спрет Оператор разворачивает массив в данные
const arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];

const res = Math.max(...arr1, ...arr2);

console.log(res);

// Объединяем два массива
// Данные у admin перезаписываются в данных у user

const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

const admin = {
  name: 'admin',
  pass: 'root'
};

//const res = Object.assign({}, user, admin);
const res = {...user, ...admin};
console.log(res);

const x = 25, y = 10;

/* const coords = {
  x: x, // Если равны то можно упростить
  y: y,
  calcSq: function () {
    console.log(this.x * this.y);
  }
} */

// Оптимизированный код

const coords2 = {x, y,
  calcSq() {
    console.log(this.x * this.y);    
  }
}

coords2.calcSq();

// Возможность добавить новый объект
const avatar = 'Photo';

const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

const admin = {
  name: 'admin',
  pass: 'root'
};

//const res = Object.assign({}, user, admin);
const res = {...user, ...admin, avatar};
console.log(res);

// Деструктуризация

const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

/* const userName = user.name,
  userPass = user.pass,
  userRights = user.rights; */

// Как правильно
// Одноимённая переменная name с значением name
// Одноимённая переменная pass с значением pass
// Одноимённая переменная rights с значением rights
// Из объекта user
const {name, pass, rights} = user;

console.log(name, rights);


const user = {
  name: {
    first: 'Sam',
    second: 'Jacson'
  },
  pass: 'qwerty',
  rights: 'user'
};
// Деструктурируем объект name внутри объекта user
const {name: {first, second}, pass, rights} = user;

console.log(first, second);

// Паттерн
function connect({
  host = 'localhost',
  port = 3000,
  user = 'default'
}) {
  console.log(`host : ${host}, port: ${port}, user: ${user}`);
}
connect({
  port: 234
});

// Но если будет передано connect(), то будет ошибка
// Что бы её избежать присвоим наши данные к пустому объекту
function connect({
  host = 'localhost',
  port = 3000,
  user = 'default'} = {}) {
  console.log(`host : ${host}, port: ${port}, user: ${user}`);
}
connect();

// Если нужно выбрать конкретный элемент
const numbers = [3, 4, 8, 4, 3];

const [a, b, c] = numbers;
console.log(a, b, c);

const numbers = [3, 4, 8, 4, 3];

const [, , c] = numbers;
console.log(c);

const numbers = [[3, 4], [8, 4, 3]];

const [[a, b], [c, d, e]] = numbers;
console.log(a, b, c, d, e);

// Деструктуризация на реальном примере

const country = {
  name: 'England',
  population: 20000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%']
  }
}
//country.gender.male[0]  - Не правильно

// Декструрируем
const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18, femAdult);
