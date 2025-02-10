const email = document.querySelector('#email');
const message = document.querySelector('#message');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');

btn.addEventListener('click', () => {
   console.log(email.value);
   console.log(message.value);
})

