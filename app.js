
let autos = require('./prueba');

let Juan = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    } 

let concesionaria = {
    autos,
    buscarAuto: function (patente) {
        let auto = this.autos.find((elem) => elem.patente === patente);
        return auto === undefined ? null : auto;
    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        if (auto) {
            auto.vendido = true;
        }
    },
    autosParaLaVenta: function () {
        let autosVenta = this.autos.filter((elem) => !elem.vendido);
        return autosVenta;
    },
    autosNuevos: function () {
        let autosNuevos = this.autosParaLaVenta().filter((elem) => elem.km < 100);
        return autosNuevos;
    },
    listaDeVentas: function () {
        let autosVenta = this.autos.filter((elem) => elem.vendido);
        let preciosVenta = [];
        autosVenta.map((elem) => preciosVenta.push(elem.precio));
        return preciosVenta;
    },
    totalDeVentas: function () {
        const preciosVenta = this.listaDeVentas();
        if (preciosVenta.length != 0)
            return preciosVenta.reduce((suma, precio) => suma += precio);
        else
            return 0;
    },
    puedeComprar: function (auto, persona) {
        
        if (persona.capacidadDePagoEnCuotas < (auto.precio / auto.cuotas))
            return false;
        if (persona.capacidadDePagoTotal < auto.precio)
            return false;
        return true;
    },
    autosQuePuedeComprar : function (persona) {
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,persona));
    }
}
//concesionaria.venderAuto("JJk116");
//concesionaria.venderAuto("APL123");
console.log(concesionaria.autosQuePuedeComprar(Juan));
