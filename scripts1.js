/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function transformarTemperatura(degree) {
    const celsiusExiste = degree.ToUpperCase().includes('C')
    const fahrenheitExiste = degree.ToUpperCase().includes('F')
    
    // Fluxo de erro
    if(!celsiusExiste && !fahrenheitExiste) {
        throw new Error('Deu ruim')
    }
    //Fluxo ideal F para C
    let updateDegree = Number(degree.ToUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit -32) * 5/9
    let degreeSign = 'C'
    
    // Fluxo alternativo C ->
    if (celsiusExiste) {
        updateDegree = Number(degree.ToUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }
    
    
    return formula (updateDegree) + degreeSign
}

try {
    console.log(transformarTemperatura('50F'))
    console.log(transformarTemperatura('50C'))
    transformarTemperatura('50Z')
} catch (error) {
    console.log(error.message)
}
