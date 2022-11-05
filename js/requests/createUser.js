function createUser() {
  let nome = document.querySelector('#nome').value
  let email = document.querySelector('#email').value
  let senha = document.querySelector('#senha').value

  axios({
    method: 'post',
    url: 'http://localhost:3000/user/create',
    responseType: 'json',
    headers: { 'Access-Control-Allow-Origin': '*' },
    data: {
      nome: nome,
      email: email,
      senha: senha
    }
  })
    .then(function (response) {
      console.log(response)
      let { message, status, data } = response.data

      if (status == 'erro') return alert(message)

      if (data == null) return alert('Falha ao receber dados do usuário')

      alert('Usuário cadastrado com sucesso!')

      window.location.href = '../login.html'
    })
    .catch(function (error) {
      console.log(error)
    })
}
