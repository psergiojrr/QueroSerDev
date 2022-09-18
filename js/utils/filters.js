function mascaraReais(valor) {
  let valorFormatado = valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  return valorFormatado
}
