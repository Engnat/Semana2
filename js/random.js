var numeros = [];
var cumple ;

	function obtenerNumR() {

		
		var valorNumeros = document.getElementById("numeros").value;
		var rangoIni = document.getElementById("ini").value;
		var rangoFin = document.getElementById("fin").value;
		numeros = [valorNumeros];
		console.log("Hola estos son los numeros", valorNumeros , rangoIni, rangoFin);
		

		if(rangoIni == 0){
			alert("El rango inicial no puede ser 0");
		}else{
		
			if(rangoFin - rangoIni >= valorNumeros){

				console.log("Siga");
				aleatoria(valorNumeros, rangoIni, rangoFin);

			}else{
				console.log('bruto');
				alert("Revise el rango");
			}
		}

	}

	

	function aleatoria(num, min, max){
		var j = 0;
		var n;
		
		while(j<num){
			console.log("Entre al while", j);

			n = Math.round(Math.random() * min) + (max - min);
			for (var i = 0; numeros.length > i; i++) {

				if (numeros.indexOf(n) != -1 ) {

					console.log("numero repetido",n);
					n = Math.round(Math.random() * min) + (max - min);
					
					
					
				}else{

					numeros.push(n);
					console.log("el numero es",n, "con numero", j);
					break;
				} 
			}
			
			j++;
			


		}

		for (var t = 1; numeros.length > t; t++) {

			console.log("valor", numeros[t], "con posicion", t);
	
			
		}
				
	}

	
	/*como hago para retomar el if, ya que return lo detiene y break rompe el ciclo?
	  siempre generada solo 2 numeros el rango final y otro numero o el numero de elementos que se mostraran
	  rango repite(10-1-11)
	*/
