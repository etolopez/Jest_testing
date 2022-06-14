
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

function fromDollarToYen(valueInDollar){
    let valueInYen = valueInDollar*134.2
    return valueInYen;
};

function fromYenToPound(valueInYen){
    let valueInPound = valueInYen*0.006
    return valueInPound;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }

console.log(fromYenToPound(400));