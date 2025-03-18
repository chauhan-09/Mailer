const email = document.querySelector('#email');
const message = document.querySelector('#message');
const subject = document.querySelector('#subject');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
   
   event.preventDefault();
   try{     
      const obj = {
         to:email.value,
         sub:subject.value,
         msg:message.value
      }
           
      const response = await fetch('http://localhost:3000/submit-form', {
         method: 'POST',
         headers: { "Content-Type": "application/json" }, 
         body: JSON.stringify(obj)
      });

      const result = await response.json();
      window.alert('Email Sent!');
      form.reset();
      console.log(result);
   }
   catch(err)
   {
      console.log(err);
   }
   
})




