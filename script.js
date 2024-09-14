
class Conta {
    constructor(numero, titular, saldo = 0.0) {
        this.numero = numero; 
        this.titular = titular; 
        this.saldo = saldo; 
    }

    
    depositar(valor) {
        this.saldo += valor;
    }

    
    retirar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para retirar R$${valor}`);
            return 0; 
        }
        this.saldo -= valor;
        return valor;
    }

    
    toString() {
        return `Conta ${this.numero} - Titular: ${this.titular} - Saldo: R$${this.saldo.toFixed(2)}`;
    }
}


class AgenciaBancaria {
    constructor(codigo) {
        this.codigo = codigo; 
        this.contas = []; 
    }

    
    addConta(conta) {
        this.contas.push(conta);
    }

    
    getConta(numero) {
        return this.contas.find(conta => conta.numero === numero);
    }

   
    listContas() {
        return this.contas.map(conta => conta.toString()).join('\n');
    }
}


const agencia = new AgenciaBancaria(1010); 

const conta1 = new Conta(12345, 'Gabriel', 500);
const conta2 = new Conta(67890, 'João Silva', 1500);


agencia.addConta(conta1);
agencia.addConta(conta2);


conta1.depositar(250);


conta2.retirar(300);


console.log("Contas da agência:");
console.log(agencia.listContas());


const contaBuscada = agencia.getConta(12345);
console.log("\nConta buscada:");
console.log(contaBuscada.toString());
