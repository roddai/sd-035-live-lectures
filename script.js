window.onload = () => {
  const form = document.getElementById('form-email');
  const email = document.getElementById('email');

  const emails = [];

  form.addEventListener('submit', (event) => {
    alert('Obrigado pelo cadastro em nossa newsletter');
    event.preventDefault();
    emails.push(email.value);
    
    localStorage.setItem('emailList', JSON.stringify(emails));
    console.log(JSON.parse(localStorage.getItem('emailList')));
  });
}