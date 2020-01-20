
// Treino

var caso1 = {
	entrada1: 1,
	entrada2: 1,
	entrada3: 1,
	saida: 1};

var caso2 = {
	entrada1: 1,
	entrada2: 1,
	entrada3: 0,
	saida: 1};
		
	
var caso3 = {
	entrada1: 0,
	entrada2: 0,
	entrada3: 1,
	saida:0 };
	
var caso4 = {
	
	entrada1: 1,
	entrada2: 0,
	entrada3: 0,
	saida:0 };

// Entrada 	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	var linha1 = {
	entrada1: 0,
	entrada2: 0,
	entrada3: 0
	};
	var linha2 = {
	entrada1: 0,
	entrada2: 0,
	entrada3: 1
	};
	var linha3 = {
	entrada1: 0,
	entrada2: 1,
	entrada3: 0
	};
	var linha4 ={ 
	entrada1: 0,
	entrada2: 1,
	entrada3: 1
	};
	var linha5 = {
	entrada1: 1,
	entrada2: 0,
	entrada3: 0
	};
	var linha6 = {
	entrada1: 1,
	entrada2: 0,
	entrada3: 1
	};
	var linha7 = {
	entrada1: 1,
	entrada2: 1,
	entrada3: 0
	};
	var linha8 = {
	entrada1: 1,
	entrada2: 1,
	entrada3: 1
	};
	
	
	

	

//Iniciação de Variaveis

var treino = [caso1,caso2,caso3,caso4];
var tbverdade = [linha1,linha2,linha3,linha4,linha5,linha6,linha7,linha8];

var entrada1 ;
var entrada2 ;
var entrada3 ;
var saida ;


var deuerro = true;
var iter=0;

var mostrar = document.getElementById('mostrar');
var result = document.getElementById('result');

// Geração de Pesos Randomicos

var max = 10;
var min = -10;

var peso1 =  Math.floor(Math.random() *(max - (min) + 1) + (min));
var peso2 =  Math.floor(Math.random() *(max - (min) + 1) + (min));
var peso3 =  Math.floor(Math.random() *(max - (min) + 1) + (min));



//Mostra na tela antes

mostrar.innerHTML = 'Peso 1: '+(peso1)+'<br> Peso 2: '+ (peso2) +'<br> Peso 3: '+ (peso3) +'<br> Iteracao:'+ (iter);



//Função de Treinamento

function treinamento(){
	
deuerro = false;
		
for (j = 0; j < treino.length; j++) {
entrada1 = treino[j].entrada1;
entrada2 = treino[j].entrada2;
entrada3 = treino[j].entrada3;
saida = treino[j].saida;
var dadoReal = iteracao();
backward(dadoReal);

}

if(deuerro == true){
	iter++
}
else{
	alert("Treinado");
}
mostrar.innerHTML = 'Peso 1: '+(peso1)+'<br> Peso 2: '+ (peso2) +'<br> Peso 3: '+ (peso3) +'<br> Iteracao:'+ (iter);



}

//Funçao de Testar

function resolver(){
	
	result.innerHTML ='';
	
for (j = 0; j < tbverdade.length; j++) {
entrada1 = tbverdade[j].entrada1;
entrada2 = tbverdade[j].entrada2;
entrada3 = tbverdade[j].entrada3;
result.innerHTML += '<tr> <td> '+(entrada1) + (entrada2) + (entrada3)+' </td><td> '+ iteracao()+' </td></tr>\n';
}
}



//Funçao de iteraçao ou seja rodar a Geração

function iteracao(){
	
	var resultoSoma = funcaoSoma();
	var dadoReal = funcaoAtivacao(resultoSoma);
	return dadoReal;
}




// Funçao de soma


function funcaoSoma(){
	
return entrada1*peso1 + entrada2*peso2 + entrada3*peso3;

}


//Função de ativação - trasforma o resultado em 1 ou 0

function funcaoAtivacao(resultoSoma){
	var dadoReal;
	if (resultoSoma > 0){ dadoReal = 1;}
	else { dadoReal = 0;}
	return dadoReal;
	
}


// Função de Ajuste de Pesos

function backward(dadoSaida){
	
	
	if(dadoSaida != saida){
		
		deuerro = true;
		
		if(dadoSaida == 0){
			peso1 += entrada1;
			peso2 += entrada2;
			peso3 += entrada3;
		}
		else if(dadoSaida == 1){
			peso1 -= entrada1;
			peso2 -= entrada2;
			peso3 -= entrada3;
		}
	
	}
}








