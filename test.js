test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(fromEuroToDollar(3.5)).toBe(4.2); 

});

test("1 dollars should be 134.2 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(1)
    const expected = 1 * 134.2; 

    expect(fromDollarToYen(1)).toBeCloseTo(134.2);
});

test("537.18 yans should be 429.744 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(1)
    const expected = 1 * 0.006; 

    expect(fromYenToPound(1)).toBeCloseTo(0.006);
});