const autos = require('./prueba');

let concesionaria = {
   autos: autos,
   buscarAuto: function(patente){
      for(let i=0; i< autos.length; i++ ){
         if(autos[i].patente == patente){
            return autos[i];
         }
      }
      return null;
   },
   venderAuto: function(patente){
      let auto = this.buscarAuto(patente)
      if(auto != null){
         auto.vendido = true;
      }
      else{
          return null;
      }
   },
   autosParaLaVenta: function(){
      let auto = this.autos.filter(auto => auto.vendido == false);
      return auto;
   },
   autosNuevos: function(){
      let auto = this.autosParaLaVenta().filter(auto => auto.km <100 );
      return auto;
    }
}
console.log(concesionaria.venderAuto('JJk116'));
console.log("Para la venta\n\n");
console.log(concesionaria.autosParaLaVenta());
console.log("\n\nNuevos\n");
console.log(concesionaria.autosNuevos());
