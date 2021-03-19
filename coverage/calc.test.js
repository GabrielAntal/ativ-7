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


    test('teste com cargo de DBA e salario menor que 2000', ()=>{
        const funcionario = {
            nome: 'Thomas Jefferson',
            salario: 1200.00,
            cargo: 'DBA'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(1020);

    })


    test('teste com cargo de testador e salario maior que 2000', ()=>{
        const funcionario = {
            nome: 'Albert Einstein',
            salario: 2100.00,
            cargo: 'Testador'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(1575);

    })

    test('teste com cargo de testador e salario menor que 2000', ()=>{
        const funcionario = {
            nome: 'Boson Higgs',
            salario: 1700.00,
            cargo: 'Testador'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(1445);

    })

    test('teste com cargo de Gerente e salario maior que 5000', ()=>{
        const funcionario = {
            nome: 'Stephen Hawking',
            salario: 15000.00,
            cargo: 'Gerente'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(10500);

    })

    test('teste com cargo de Gerente e salario menor que 5000', ()=>{
        const funcionario = {
            nome: 'Stephen Hawking',
            salario: 2500.00,
            cargo: 'Gerente'
        }

        calc.calculaSal(funcionario)
        expect(calc.novoSalario).toBe(2000);

    })
    test('teste com cargo de Gerente e salario menor que 5000', ()=>{
        const funcionario = {
            nome: 'Trevor Belmont',
            salario: 700.00,
            cargo: 'Marketing'
        }

       
        expect(()=>{
            calc.calculaSal(funcionario)
        }).toThrow('Cargo inválido');

    })

})