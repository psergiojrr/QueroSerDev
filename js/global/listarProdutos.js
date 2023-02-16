function listarProdutos() {
  let param = window.location.search

  if (param != '') {
    param = param.split('?').join('').split('=')

    if (param[1].includes('%20')) {
      param[1] = param[1].split('%20').join(' ')
    }
  }

  let json = {
    [`${param[0]}`]: getCategory(param[1])
  }

  axios({
    method: 'post',
    url: 'http://localhost:3000/products',
    responseType: 'json',
    headers: { 'Access-Control-Allow-Origin': '*' },
    data: json
  })
    .then(function (response) {
      let produtos = response.data ?? `Não há produto cadastrado.`
      let sectionProdutos = document.querySelector('#lista-produtos')
      let listaProdutos = ''

      produtos.forEach(produto => {
        listaProdutos += `<div key="${produto.id}" class="card">
        <div>
          <img
            alt="Tênis branco da marca All Stars"
            src="${produto.imagem}"
          />
        </div>
        <div class="card-bottom">
          <h3 class="card-titulo">
            ${produto.nome}
          </h3>
          <p class="card-descricao">
            ${produto.descricao}
          </p>
        </div>
        <div class="card-informacoes">
          <span>${produto.categoria}</span>
          <span><strong>${mascaraReais(produto.preco)}</strong></span>
        </div>
      </div>`
      })
      sectionProdutos.innerHTML = listaProdutos
      if (listaProdutos == '') {
        listaProdutos += `<h3 class="nenhumPedido">Nenhum pedido foi localizado :(</h3>`
        sectionProdutos.innerHTML = listaProdutos
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getCategory(value) {
  let valor = value

  switch (value) {
    case 'tenis':
      valor = 'tênis'
      break
    case 'acessorio':
      valor = 'acessório'
      break
    case 'calca':
      valor = 'calça'
      break

    default:
      break
  }

  return valor
}

function pesquisarProduto(event) {
  if (event.keyCode == 13) {
    let palavraChave = event.target.value

    if (palavraChave == null && palavraChave == '') return false

    window.location.href = `./pesquisa.html?nome=${palavraChave}`
  }
}

function limpaTexto() {
  document.querySelector('#textoPesquisa').value = ''
  apareceBotaoLimpar()
}

function apareceBotaoLimpar() {
  document.querySelector('#limpaTexto').classList.remove('tira-botao-limpar')

  let texto = document.querySelector('#textoPesquisa')
  if (texto.value === '') {
    return document
      .querySelector('#limpaTexto')
      .classList.add('tira-botao-limpar')
  }
}
