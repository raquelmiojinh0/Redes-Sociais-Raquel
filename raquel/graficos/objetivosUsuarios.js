https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json
async function objetivosUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const objetivosUsuarios = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      labels: objetivosUso,
      values: quantidadeUsuarios,
      type: 'pie'
    }
  ]
  
  const layout = 
    {
      height: 600,
      width: 870,
    }
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
  
  }
  
  objetivosUsuarios()
  const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getComputedStyle(document.body).getPropertyValue('--primary-color')
      }
    }
  ]
    