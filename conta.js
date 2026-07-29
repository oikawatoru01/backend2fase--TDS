let saldoSeungmin = 1000;
let saldoJin = 500;

const taxaJuros = 0.02;
const saldoComJuros = saldoSeungmin * (1 + taxaJuros);

const contaSeungmin = {
    titular: "Seungmin",
    saldo: saldoSeungmin
}

const contaJin = {
    titular: "Jin",
    saldo: saldoJin
};

const contas = [contaSeungmin, contaJin]; //Array (lista)

contas.forEach((conta) => {
    console.log(`Titular: ${conta.titular} tem R$ ${conta.saldo}.`);
});

contaSeungmin.saldo = 5000;
console.log(`Saldo alterado sem controle: ${contaSeungmin.saldo}`);