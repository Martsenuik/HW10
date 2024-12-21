//*\\\\\\\\\\\\\ завдання 1 \\\\\\\\\\\\\\\\\\\
//1. Напиши скрипт який при кліку на кнопку буде 
// виводити на екран повідомлення “Hello World!”. 
// Використовуй колбек в вигляді стрілки

const btn = document.querySelector('.click-btn');
const text = document.querySelector('.title');
const outputMessage = ()=>{
    text.textContent = "Hello World!"
}

btn.addEventListener('click', outputMessage)


//*\\\\\\\\\\\\\ завдання 2 \\\\\\\\\\\\\\\\\\\
//2. Створи програму, яка генерує випадкове число
// від 1 до 100. Користувач повинен вгадати число,
// введенням його в текстове поле. При кліку на кнопку
// "Перевірити" програма повинна повідомити користувача,
// чи є їх відповідь правильною.

const randomNum = document.querySelector('.random');
const randomNumber = Math.floor((Math.random() * 100) + 1);

const checkGues = () => {
    console.log('hello');
    
}


randomNum.textContent = `рандомне число ${randomNumber}`

console.log(randomNumber);

//*\\\\\\\\\\\\\ завдання 3 \\\\\\\\\\\\\\\\\\\
// Створи програму, яка відображає повідомлення про те,
// скільки разів користувач клікнув на сторінці.

const total = document.querySelector(".totalClick");

let count = 0;
document.addEventListener("click", () => {
  count += 1;
  // console.log(count);
  total.textContent = `Ви клікнули на сторінці ${count} разів`;
});



//*\\\\\\\\\\\\\ завдання 4 \\\\\\\\\\\\\\\\\\\
//4. Напиши функцію, яка приймає масив чисел і колбек-функцію. 
// Функція повинна застосовувати колбек-функцію до кожного елементу масиву 
// та повертати новий масив, що містить результати застосування колбек-функції
//  до кожного елементу.

const arr = [1, 5, 3, 4, 5];


const applyCallbackToEachElement = (arr, callback) => {

  let powArr = [];

  for (const numEl of arr) {
    powArr.push(callback(numEl))
   }
return powArr
};

const squareCallback = (num) => {
  return Math.pow(num, 2);
};

const result = applyCallbackToEachElement(arr, squareCallback);

console.log(result); // [1, 4, 9, 16, 25]


