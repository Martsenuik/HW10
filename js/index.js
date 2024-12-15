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

//*\\\\\\\\\\\\\ завдання 4 \\\\\\\\\\\\\\\\\\\

//*\\\\\\\\\\\\\ завдання 5 \\\\\\\\\\\\\\\\\\\



























