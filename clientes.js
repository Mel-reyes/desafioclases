export class Cliente {
    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto;
    }

    getNombre() {
        return this.nombre;
    }

    getImpuesto() {
        return this.impuesto;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    setImpuesto(nuevoImpuesto) {
        this.impuesto = nuevoImpuesto;
    }

    calcularImpuestoTotal() {
        const { montoBrutoAnual, deducciones } = this.impuesto;
        return (montoBrutoAnual - deducciones) * 0.21; 
    }
}