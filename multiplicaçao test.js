const multiplicar=require ('./multiplicaçao');

test ("deve multiplicar dois numeros inteiros positivo", ()=>{
 expect(multiplicar (3,2)).toBe(6)})

 test ("deve multiplicar 3 por 2 e retronar 6,", ()=>{
    expect(multiplicar (3,2)).toBe(6)})

    test ("deve multiplicar 1 por 5 e retornar 5", ()=>{
        expect(multiplicar (3,2,)).toBe(5)})
        test ("deve falhar ao verificar 3*2", ()=>{
            expect(multiplicar (3,2,)).toBe(5)})
          


            