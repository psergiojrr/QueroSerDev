function getCategories() {
  axios({
    method: 'get',
    url: 'http://localhost:3000/category',
    responseType: 'json',
    headers: { 'Access-Control-Allow-Origin': '*' }
  })
    .then(function (response) {
      const categories = response.data
      const categorySelect = document.getElementById('category')
      categories.forEach(category => {
        const option = document.createElement('option')
        option.value = category.name
        option.textContent = category.name
        categorySelect.appendChild(option)
      });
    })
    .catch(error => {
      return alert("Erro ao carregar categorias:", error.message)
    })
}
