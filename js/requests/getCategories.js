async function getCategories() {
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3000/category',
      responseType: 'json',
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
    return response.data
  } catch (error) {
    alert("Erro ao carregar categorias: " + error.message)
    return []
  }
}
