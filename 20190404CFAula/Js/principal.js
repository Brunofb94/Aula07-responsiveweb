
var receita1 = document.querySelector("#primeira-receita");
console.log(receita1)
var valor = receita1.querySelector(".info-valor");
var saldo = receita1.querySelector(".info-saldo");
saldo.textContent = valor.textContent;
var valor1 = valor.textContent;
var valor1 = parseInt(valor1);
console.log(valor1);

var receita2 = document.querySelector("#segunda-receita");
var valorr2 = document.querySelector("#segunda-receita .info-valor");
var vr2 = valorr2.textContent;
var vr2 = parseFloat(vr2);
console.log(valorr2);
var subre2 = receita2.querySelector(".info-saldo");
var total = (valor1 - - vr2);
subre2.textContent = total;
var total = parseFloat(total);
//Finalizado o saldo da segunda receita


var subre3 = receita2.querySelector(".info-saldo");
console.log(subre3);
var vrr3 = subre3.textContent;
console.log(vrr3);

var receita3 = document.querySelector("#terceira-receita");
var r3 = receita3.querySelector(".info-valor");
console.log(r3);
var valor3 = r3.textContent;
console.log(valor3);

var totaldar3 = receita3.querySelector(".info-saldo");
var tot = vrr3 - - valor3;
console.log(tot); 
totaldar3.textContent = tot;

//finalizado o saldo da terceira receita

var subre4 = receita3.querySelector(".info-saldo");
console.log(subre4);
var vrr4 = subre4.textContent;
console.log(vrr4);

var receita4 = document.querySelector("#quarta-receita");
var r4 = receita4.querySelector(".info-valor");
console.log(r4);
var valor4 = r4.textContent;
console.log(valor4);

var totaldar4 = receita4.querySelector(".info-saldo");
var tot4 = vrr4 - - valor4;
console.log(tot4); 
totaldar4.textContent = tot4;
//finalizado o saldo da quarta receita

var subre5 = receita4.querySelector(".info-saldo");
console.log(subre5);
var vrr5 = subre5.textContent;
console.log(vrr5);

var receita5 = document.querySelector("#quinta-receita");
var r5 = receita5.querySelector(".info-valor");
console.log(r5);
var valor5 = r5.textContent;
console.log(valor5);

var totaldar5 = receita5.querySelector(".info-saldo");
var tot5 = vrr5 - - valor5;
console.log(tot5); 

var toteste = parseFloat(tot5.toFixed(2));
console.log(toteste);
totaldar5.textContent = toteste;
if(totaldar5.textContent < 0){
    totaldar5.style.color = "red";
}
//finalizado os calculos

var btnad = document.querySelector("#adicionar-receita");
btnad.addEventListener("click", function(evento){
    evento.preventDefault(); //comportamento do button
    console.log("button clicked");
    var form = document.querySelector("#form-adiciona");
    var descricao = form.descricao.value;
    var categoria = form.categoria.value;
    var data = form.data.value;
    var valor = parseFloat(form.valor.value);
    var erros = form.querySelector("#erro");


    if(descricao.length <= 0){
        erros.textContent = "Campo Descrição é obrigatorio.\n";
    }
    if(categoria.length <= 0){
        erros.textContent = "Campo Categoria é obrigatorio.\n";
    }
    if(data.length <= 0){
        erros.textContent = "Campo Data é obrigatorio.\n";
    }
    if(isNaN(valor) ){
        erros.textContent += "Campo valor é obrigatorio.\n";
    }else{
        if(valor ==0 ){
            erros.textContent += "O valor é obrigatorio";
        }
    
    
   
   // var saldotr = form.saldotr.value;

    //criando a tr para financeiro

    var trfinanceiro = document.createElement("tr");
    //criar as td \/

    var tddescricao = document.createElement("td");
    var tdcategoria = document.createElement("td");
    var tddata = document.createElement("td");
    var tdvalor = document.createElement("td");
    //var tdsaldo = document;createElement("td");

    //Atribuindo os valores para td
    tddescricao.textContent = descricao;
    tdcategoria.textContent = categoria;
    tddata.textContent = data;
    tdvalor.textContent = valor;
    //tdsaldo.textContent = saldotr;

    //inserindo os td's na tr
    trfinanceiro.appendChild(tddescricao);
    trfinanceiro.appendChild(tdcategoria);
    trfinanceiro.appendChild(tddata);
    trfinanceiro.appendChild(tdvalor);
    //trfinanceiro.appendChild(tdsaldo);
    console.log(trfinanceiro);

    var tabelafinanceiro = document.querySelector("#tabela-financeiro");
    tabelafinanceiro.appendChild(trfinanceiro);
    
    
    }
});
function limparerros(erros){
    erros.innerHTML = "";
}







