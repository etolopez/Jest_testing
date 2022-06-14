
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

function fromDollarToYen(valueInDollar){
    let valueInYen = valueInDollar*127.9
    return valueInYen;
};

function fromYenToPound(valueInYen){
    let valueInPound = valueInYen*0.8
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }