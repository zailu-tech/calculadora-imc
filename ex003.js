const imc  = (peso, altura) => peso / (altura * altura); // Função para calcular o IMC
const Situacao = (valor_imc) => { // Função para determinar a situação do IMC

    // Verifica em qual faixa de IMC o valor se encontra
    if (valor_imc < 18.5)
        return "Abaixo do peso";
    else if (valor_imc < 25)
        return "Peso ideal (Parabéns!)";
    else if (valor_imc < 30)
        return "Levemente acima do peso";
    else if (valor_imc < 35)
        return "Obesidade de grau I"
    else if (valor_imc < 40)
        return "Obesidade de grau II (Severa)"
    else
        return "Obesidade de grau III (Mórbida)"
}
    
