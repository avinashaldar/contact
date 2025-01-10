const scriptURL = 'https://script.google.com/macros/s/AKfycbyAKCbsJrsrp7_5rHhN0OxHL3n1dFNyFybVocIpde3tStzaOyaD1DQpp8yg8ZK4fz5l/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})