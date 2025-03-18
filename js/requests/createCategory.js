function createCategory() {
  const name = document.querySelector('#name').value

  if(!name) {
    return alert('O campo "nome" deve estar preenchido')
  }

  axios({
    method: 'post',
    url: 'http://localhost:3000/category',
    responseType: 'json',
    headers: { 'Access-Control-Allow-Origin': '*' },
    data: {
      name: name,
    }
  })
    .then(function (response) {
      let { message, status } = response.data

      if (status == 'erro') return alert(message)

      alert('Categoria cadastrada com sucesso!')
    })
    .catch(function (error) {
      return alert(error.message)
    })
}
