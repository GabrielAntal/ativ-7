class Calc{

    constructor(){
        this.initVar();
    }

    initVar(){
        this.novoSalario= 0;
    }

    devCalc(funcionario){
        
        if(funcionario.salario>=3000){
            this.novoSalario = funcionario.salario - (funcionario.salario*0.2);
            return this.novoSalario;
        }else{
            this.novoSalario = funcionario.salario - (funcionario.salario*0.1);
            return this.novoSalario;
        }
    }

    calculaSal(funcionario){
        this.initVar();
        if(funcionario.cargo==='Desenvolvedor'){
            this.devCalc(funcionario);
        }
        if(funcionario.cargo==='DBA'){
            if(funcionario.salario>=2000){
                this.novoSalario = funcionario.salario - (funcionario.salario*0.25);
                return this.novoSalario;
            }
        }
        
    }


}

module.exports = Calc;