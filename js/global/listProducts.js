async function listProducts() {
  axios({
    method: 'get',
    url: `http://localhost:3000/product`,
    responseType: 'json',
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
  .then(function (response) {
    let products = response.data ?? `Não há produto cadastrado.`
    let sectionProdutos = document.querySelector('#lista-produtos')
    let productList = ''

    products.forEach(product => {
      productList += `<div key="${product.id}" class="card">
        <div>
          <img src="${product.image}" />
        </div>
        <div class="card-bottom">
          <h3 class="card-titulo">${product.name}</h3>
          <p class="card-descricao">${product.description}</p>
        </div>
        <div class="card-informacoes">
          <span>${product.category}</span>
          <span><strong>${convertToBRL(product.price/100)}</strong></span>
        </div>
      </div>`
    })
    sectionProdutos.innerHTML = productList

    if (productList == '') {
      productList += `<h3 class="nenhumPedido">Nenhum pedido foi localizado :(</h3>`
      sectionProdutos.innerHTML = productList
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}

// function getCategory(value) {
//   let category
//   switch (value) {
//     case 'tenis':
//       category = 'tênis'
//       break
//     case 'acessorio':
//       category = 'acessório'
//       break
//     case 'calca':
//       category = 'calça'
//       break

//     default:
//       break
//   }

//   return category
// }

// function searchProduct(event) {
//   if (event.keyCode == 13) {
//     let key = event.target.value

//     if (!key) return false

//     window.location.href = `./pesquisa.html?name=${key}`
//   }
// }

// function clearText() {
//   document.querySelector('#textoPesquisa').value = ''
//   showClearButton()
// }

// function showClearButton() {
//   document.querySelector('#clearText').classList.remove('tira-botao-limpar')

//   let texto = document.querySelector('#textoPesquisa')
//   if (texto.value === '') {
//     return document
//       .querySelector('#clearText')
//       .classList.add('tira-botao-limpar')
//   }
// }