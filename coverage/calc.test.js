const Calc = require('../lib/calc');
const calc = new Calc();

describe("Calc",()=>{

    test('teste com cargo de desenvolvedor e salario maior que 3000', ()=>{
        const funcionario = {
            nome: 'Charles Darwin',
            salario: 3500.00,
            cargo: 'Desenvolvedor'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(2800);

    })

})