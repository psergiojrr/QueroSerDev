function createProduct() {
  let nome = document.querySelector('#nome').value
  let descricao = document.querySelector('#descricao').value
  let categoria = document.querySelector('#categoria').value
  let preco = document.querySelector('#preco').value
  let imagem = document.querySelector('#imagem').value

  if (
    nome.length >= 2 &&
    descricao.length >= 10 &&
    categoria.length >= 4 &&
    preco >= 1
  ) {
    let data = {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      preco: preco,
      imagem: imagem
    }

    axios({
      method: 'post',
      url: 'http://localhost:3000/product',
      responseType: 'json',
      headers: { 'Access-Control-Allow-Origin': '*' },
      data: {
        nome: nome,
        descricao: descricao,
        categoria: categoria,
        preco: Number(preco),
        imagem: imagem
      }
    })
      .then(function (response) {
        console.log(response)
        let { message, status, data } = response.data

        if (status == 'erro') return alert(message)

        if (data == null) return alert('Falha ao receber dados do produto')

        alert('Produto cadastrado com sucesso!')
        window.location.href = '../index.html'
      })
      .catch(function (error) {
        console.error(error)
      })
  } else {
    if (nome.length < 2) {
      alert('O campo "nome" deve conter mais que 2 caracteres')
    } else if (descricao.length < 10) {
      alert('O campo "descricao" deve conter mais que 10 caracteres')
    } else if (categoria.length < 4) {
      alert('O campo "categoria" deve conter mais que 4 caracteres')
    } else {
      alert('O "preço" nome deve ser maior que 1,00')
    }
  }
}
