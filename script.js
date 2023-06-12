//DEFINICIONES
// const ValorPlano = 1900;



//DESCUENTOS

// let Viviendas = 0.2;
// let Oficinas = 0.15;
// let Locales = 0.30;
// 1

// DEFINO VARIABLES PARA CALCULO

// const cantidad = document.querySelector('#cant');
// const cliente = document.querySelector('#tipo_cli');
// const calcular = document.querySelector('#calcula');
// const resultado = document.querySelector('#pesos');

//PROCESO CALCULAR

// function calcularTotal() {
  //VALORES  
  // let totalPagar = parseInt (cantidad.value) * ValorPlano;

  //CALCULO DESCUENTO SEGUN CLIENTE


  // if (cliente.value == "vivienda") {
  //   totalPagar = totalPagar - (totalPagar * Viviendas);
  // } else if (cliente.value == "oficina") {
  //   totalPagar = totalPagar - (totalPagar * Oficinas);
  // } else if (cliente.value == "local") {
  //   totalPagar = totalPagar - (totalPagar * Locales);
  // }
  

    // RESULTADO

  //  resultado.innerHTML = "TOTAL A PAGAR = $ " + totalPagar;
// }
// MOSTRAR EL RESULTADO
// calcular.addEventListener('click', calcularTotal);



// console.log(resultado);


    
  //   var totalPagar = cantidad * 1900; 
  //   totalPagar -= totalPagar * descuento; 
    
  //   document.getElementById("total").textContent = totalPagar.toFixed(2);
  //   console.log(totalPagar)
  // }
  
//del PerformanceResourceTiming

//tomo los valores



  //DEFINICIONES
  const ValorPlano = 1900;

  //DESCUENTOS
  const Externo = 1
  const Viviendas = 0.1;
  const Oficinas = 0.15;
  const Locales = 0.3;

  // DEFINO VARIABLES PARA CALCULO
   const cantidad = document.querySelector('#cant');
  const cliente = document.querySelector('#tipo_cli');
  const calcular = document.querySelector('#calcula');
  const resultado = document.querySelector('#resultado');

  //PROCESO CALCULAR
  function calcularTotal() {
    //VALORES
    let totalPagar = parseInt(cantidad.value) * ValorPlano;

    //CALCULO DESCUENTO SEGUN CLIENTE
    if (cliente.value === 'vivienda') {
      totalPagar -= totalPagar * Viviendas;
    } else if (cliente.value === 'oficina') {
      totalPagar -= totalPagar * Oficinas;
    } else if (cliente.value === 'local') {
      totalPagar -= totalPagar * Locales;
    } else (totalPagar);

    // RESULTADO
    resultado.innerHTML = "Total a pagar: $" + totalPagar;
  }

  // ASIGNAR  BOTÓN "calcula"
  calcular.addEventListener('click', calcularTotal);





