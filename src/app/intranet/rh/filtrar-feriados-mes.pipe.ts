import { Pipe, PipeTransform } from '@angular/core';
import { Feriado } from './calendario-rh/feriado';

@Pipe({ name: 'FiltrarFeriadosPorMes' })
export class FiltrarFeriadosPorMes implements PipeTransform {

    transform(lista: Feriado[], descriptionQuery: number) {

        if (lista) {
            return lista.filter(item => item.mes == descriptionQuery && 
                (!item.type_code || item.type_code == 1)).sort(this.compararNumeros);
        }

    }

    compararNumeros(a: Feriado, b: Feriado) {
        var aComp = +a.dias.substring(0, (a.dias + " ").indexOf(" "));
        var bComp = +b.dias.substring(0, (b.dias + " ").indexOf(" "));
        return aComp - bComp;
    }
}