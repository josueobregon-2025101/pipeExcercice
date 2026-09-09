import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject ,map,combineLatest} from 'rxjs';

@Component({
  imports: [FormsModule, AsyncPipe],
  selector: 'app-view',
  styleUrl: './view.css',
  templateUrl: './view.html',
})
export class View {
  
numero1 = 10;
numero2 = 5;

private numero1$ = new BehaviorSubject<number>(10);
private numero2$ = new BehaviorSubject<number>(5);

  // Suma
suma$ = combineLatest([
this.numero1$,
this.numero2$
]).pipe(
map(([a, b]) => a + b)
);

// Resta
resta$ = combineLatest([
this.numero1$,
this.numero2$
]).pipe(
map(([a, b]) => a - b)
);

// Multiplicación
multiplicacion$ = combineLatest([
this.numero1$,
this.numero2$
]).pipe(
map(([a, b]) => a * b)
);

// División
division$ = combineLatest([
this.numero1$,
this.numero2$
]).pipe(
map(([a, b]) => b !== 0 ? a / b : 0)
);

// Potencia
potencia$ = this.numero1$.pipe(
map(a => Math.pow(a, 2))
);

// Raíz cuadrada
raiz$ = this.numero1$.pipe(
map(a => Math.sqrt(a))
);

// Porcentaje
porcentaje$ = combineLatest([
this.numero1$,
this.numero2$
]).pipe(
map(([a, b]) => a * b / 100)
);

// Valor absoluto
absoluto$ = this.numero1$.pipe(
map(a => Math.abs(a))
);

// Módulo
modulo$ = combineLatest([
this.numero1$,
this.numero2$
]).pipe(
map(([a, b]) => b !== 0 ? a % b : 0)
);

// Operación encadenada
encadenada$ = combineLatest([
this.numero1$,
this.numero2$
]).pipe(
map(([a, b]) => Math.pow(a * b + 20, 2))
);

cambiarNumero1(valor: number) {
this.numero1 = valor;
this.numero1$.next(valor);
}

cambiarNumero2(valor: number) {
this.numero2 = valor;
this.numero2$.next(valor);
}
}
