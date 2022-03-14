document.getElementById('submit').addEventListener('click', () => {
const name = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
const message = document.getElementById('inputMessage');

alert("Name received: " + name.value + "\nEmail Received: "+ email.value+ "\nYour Message: " + message.value);

// Open mail application, prefills email and message
window.open('mailto:' + email.value +'?body=' + message.value + '&subject=Get in Touch');

name.value='';
email.value='';
message.value='';
});

