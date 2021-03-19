class Calc{



    calculaSal(funci){
        const novoSalario = 0.00;
        if(funci.salario>=3.000){
            this.novoSalario = funci.salario - (funci.salario*0.2);
            return novoSalario;
        }

    }


}

module.exports = Calc;