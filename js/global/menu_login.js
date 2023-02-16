function autenticar() {
  let user = checkUser()
  let status = ''

  let loginMenu = document.querySelector('#menu-usuario')

  if (user != null && user != undefined) {
    let menuLogado = `<li id="item-logado" class="nav-item dropdown">
      <a
        id="nome-usuario"
        class="nav-link dropdown-toggle ms-auto login"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ${user.nome || `Login`}
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="../${
          user.admin ? `cadastro-produto.html` : `./meus-dados.html`
        }"> ${user.admin ? `Cadastrar produto` : `Meus dados`}</a></li>

        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item usuario-sair" onclick="logout()">Sair</a>
        </li>
      </ul>
    </li>`

    loginMenu.innerHTML = menuLogado
    return (status = 'sucesso')
  }
}

function logout() {
  let loginMenu = document.querySelector('#menu-usuario')
  localStorage.removeItem('user')

  let menuDeslogado = `<li id="item-deslogado" class="nav-item">
            <a href="/login.html">Login</a>
          </li>`

  loginMenu.innerHTML = menuDeslogado
  window.location.href = '/index.html'
}

function checkUser() {
  let user = JSON.parse(localStorage.getItem('user'))
  let white = whiteList()

  if (user == null && white == false) {
    return (window.location.href = './login.html')
  }

  return user
}

function whiteList() {
  let url = window.location.href
  let list = ['index.html', 'pesquisa.html', 'cadastro-usuario.html','']

  url = url.split('/')[3]

  let isGranted = list.some(item => item == url)

  return isGranted
}
