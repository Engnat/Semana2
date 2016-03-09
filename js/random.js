var numeros = [];
//var cumple ;

	function obtenerNumR() {

		
		var valorNumeros = Number(document.getElementById("numeros").value);
		var rangoIni = Number(document.getElementById("ini").value);
		var rangoFin = Number(document.getElementById("fin").value);
		console.log("Hola estos son los numeros", numeros);
		

		if(rangoIni === 0){
			alert("El rango inicial no puede ser 0");
		}else{
		
			if(rangoFin - rangoIni >= valorNumeros){

				console.log("Siga");
				var numeros = getNumbers(valorNumeros ,rangoIni, rangoFin);
				document.getElementById("arreglo").innerHTML=numeros;
			}else{
				console.log('bruto');
				alert("Revise el rango");
			}
		}

	}

	function getNumbers(num, min, max){
		var j = 0;
		var numeros=[];	
		while(j<num){
			console.log("Entre al while", j);
			function getRandomNum(){

				var randomNumber = Math.floor(Math.random() * max) + min;
				if (numeros.indexOf(randomNumber) != -1 ){
					return getRandomNum();
				}
				return randomNumber;
			}
			
			numeros.push(getRandomNum());
			j++;
		}
		console.log(numeros);
		return numeros;		
	}

	
	/*como hago para retomar el if, ya que return lo detiene y break rompe el ciclo?
	  siempre generaba solo 2 numeros el rango final y otro numero o el numero de elementos que se mostraran
	  rango repite(10-1-11)
	*/
