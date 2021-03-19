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


    test('teste com cargo de desenvolvedor e salario menor que 3000', ()=>{
        const funcionario = {
            nome: 'Isaac Newton',
            salario: 2000.00,
            cargo: 'Desenvolvedor'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(1800);

    })


    test('teste com cargo de DBA e salario maior que 2000', ()=>{
        const funcionario = {
            nome: 'Charles Darwin',
            salario: 5500.00,
            cargo: 'DBA'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(4125);

    })

})