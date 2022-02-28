const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const getChines = e => e.pais = 'China'
const getMulheres = e => e.genero = 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
const getSalario = e => e.salario < 1276.83
axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
    .filter(getChines)
    .filter(getMulheres)
    .reduce(menorSalario)

    console.log(func)
    
})

