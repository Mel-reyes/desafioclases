export class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    getMontoBrutoAnual() {
        return this.montoBrutoAnual;
    }

    getDeducciones() {
        return this.deducciones;
    }

    setMontoBrutoAnual(nuevoMontoBrutoAnual) {
        this.montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    setDeducciones(nuevasDeducciones) {
        this.deducciones = nuevasDeducciones;
    }
}