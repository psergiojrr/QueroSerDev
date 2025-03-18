function createProduct() {
  const name = document.querySelector('#name').value
  const description = document.querySelector('#description').value
  const category = document.querySelector('#category').value
  const price = document.querySelector('#price').value
  const image = document.querySelector('#image').value

  if (
    name.length >= 2 &&
    description.length >= 10 &&
    category.length >= 4 &&
    price >= 1
  ) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/product',
      responseType: 'json',
      headers: { 'Access-Control-Allow-Origin': '*' },
      data: {
        name: name,
        description: description,
        category: category,
        price: Number(price*100),
        image: image
      }
    })
      .then(function (response) {
        let { message, status, data } = response.data

        if (status == 'erro') return alert(message)

        if (data == null) return alert('Falha ao receber dados do produto')

        alert('Produto cadastrado com sucesso!')
        window.location.href = '../index.html'
      })
      .catch(function (error) {
        return alert(error.message)
      })
  } else {
    if (name.length < 2) {
      alert('O campo "nome" deve conter mais que 2 caracteres')
    } else if (description.length < 10) {
      alert('O campo "descricao" deve conter mais que 10 caracteres')
    } else if (category.length < 4) {
      alert('O campo "categoria" deve conter mais que 4 caracteres')
    } else {
      alert('O "preço" nome deve ser maior que 1,00')
    }
  }
}
