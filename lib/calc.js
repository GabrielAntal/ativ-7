class Calc{

    constructor(){
        this.initVar();
    }

    initVar(){
        this.novoSalario= 0;
    }

    calculaSal(funci){
       this.initVar();
        if(funci.salario>=3.000){
            this.novoSalario = funci.salario - (funci.salario*0.2);
            return this.novoSalario;
        }

    }


}

module.exports = Calc;