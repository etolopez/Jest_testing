test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 

});

test("3.5 dollars should be 537.18 yens", function(){
    const { fromDollarToYen } = require('./app.js')


    const yens = fromDollarToYen(4.2)
    const expected = 4.2 * 127.9; 

    expect(fromDollarToYen(4.2)).toBeCloseTo(537.18);
});

test("537.18 yans should be 429.744 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(537.18)
    const expected = 537.18 * 0.8; 

    expect(fromYenToPound(537.18)).toBeCloseTo(429.744);
});