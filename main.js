import { Cliente } from './clientes.js';
import { Impuesto } from './impuestos.js';

$('#impuestos').on('submit', function (ev) {
    ev.preventDefault();

    
    const nombre = $('.nombre').val();
    const montoBrutoAnual = $('.monto_bruto_anual').val();
    const deducciones = $('.deducciones').val();

    
    const impuesto = new Impuesto(montoBrutoAnual, deducciones);
    const cliente = new Cliente(nombre, impuesto);

    // Muestro resultado
    $(".resultado").html(`${cliente.calcularImpuestoTotal()}`);
});