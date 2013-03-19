//RELÓGIO 

function Relogio(){ 
  var momentoAtual = new Date() 
	hora = momentoAtual.getHours() 
	minuto = momentoAtual.getMinutes() 
	segundo = momentoAtual.getSeconds()

	str_segundo = new String (segundo) 
   	if (str_segundo.length == 1) 
      	 segundo = "0" + segundo 

   	str_minuto = new String (minuto) 
   	if (str_minuto.length == 1) 
      	 minuto = "0" + minuto 

   	str_hora = new String (hora) 
   	if (str_hora.length == 1) 
      	 hora = "0" + hora  

	horaImprimivel = hora + ":" + minuto + ":" + segundo

	tempo.innerHTML = horaImprimivel; 

	setTimeout("Relogio()",1000)
} 


//CALENDÁRIO

function calendario() {
	Hoje = new Date();
    Data = Hoje.getDate();
    Dia = Hoje.getDay();
    Mes = Hoje.getMonth();
    Ano = Hoje.getFullYear();

    if(Data < 10) {
        Data = "0" + Data;
    }

    NomeDia = new Array(7)
    NomeDia[0] = "domingo"
    NomeDia[1] = "segunda-feira"
    NomeDia[2] = "terça-feira"
    NomeDia[3] = "quarta-feira"
    NomeDia[4] = "quinta-feira"
    NomeDia[5] = "sexta-feira"
    NomeDia[6] = "sábado"

    NomeMes = new Array(12)
    NomeMes[0] = "Janeiro"
    NomeMes[1] = "Fevereiro"
    NomeMes[2] = "Março"
    NomeMes[3] = "Abril"
    NomeMes[4] = "Maio"
    NomeMes[5] = "Junho"
    NomeMes[6] = "Julho"
    NomeMes[7] = "Agosto"
    NomeMes[8] = "Setembro"
    NomeMes[9] = "Outubro"
    NomeMes[10] = "Novembro"
    NomeMes[11] = "Dezembro"

    dataImprimivel = "Belzonte, "+ Data + " de " + NomeMes[Mes] + " de " + Ano

    mostra.innerHTML = dataImprimivel;

    setTimeout("calendario()")

}
