const form = document.querySelector('form')
const errorMessege = document.querySelector('.Messege')
form.onsubmit = function (e) {
  if (form.password1.value === form.password2.value)
    console.log(password1.value)
  else {
    e.preventDefault()
    form.password1.classList.toggle('error')
    form.password2.classList.toggle('error')
    errorMessege.style.visibility = 'visible'
  }
}
