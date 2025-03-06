function createUser() {
  let name = document.querySelector('#name').value
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value

  if(!name) {
    return alert('O campo nome é obrigatório!')
  }

  if(!email) {
    return alert('O campo email é obrigatório!')
  }

  if(!password) {
    return alert('O campo senha é obrigatório!')
  }

  axios({
    method: 'post',
    url: 'http://localhost:3000/user',
    responseType: 'json',
    headers: { 'Access-Control-Allow-Origin': '*' },
    data: {
      name: name,
      email: email,
      password: password
    }
  })
    .then(function (response) {
      let { message, data } = response.data

      if (!data) return alert(message)

      if(response.status === 201) {
        alert('Usuário cadastrado com sucesso!')

        window.location.href = '../login.html'
      }
    })
    .catch(function (error) {
      alert(error.response.data)
    })
}
