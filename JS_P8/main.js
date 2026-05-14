import { usernameRules, emailRules } from './formRules.js';

const form = document.getElementById('registrationForm');

form.addEventListener('submit', async (e) =>
{
  e.preventDefault();

  const usernameValue = document.getElementById('username').value;
  const emailValue = document.getElementById('email').value;

 const [userRes, emailRes] = await Promise.all([
    usernameRules(usernameValue),
    emailRules(emailValue)
  ]);

  document.getElementById('usernameErr').innerText = userRes.errors.join(', ');
  document.getElementById('emailErr').innerText = emailRes.errors.join(', ');

  if (userRes.isValid && emailRes.isValid) 
  {
    console.log('Дані готові до відправки:', { usernameValue, emailValue });
  }
});