import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'
})

export class CalculaMediaComponent {
  boletim: Boletim
  alerta?: string 
  situacao: string = ''

  constructor() {
    this.boletim = new Boletim(0,0,0,0)
  }
  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
    this.alerta = "";
    if (b1 < 0 || b2 < 0 || b3 < 0 || b4 < 0){
      this.alerta = "Valores inválidos!";
      return;
    }
    this.boletim = new Boletim(b1, b2, b3, b4)
    this.situacao = this.boletim.calcularMediaParcial(b1, b2, b3, b4)
  }

  calcularMediaFinal( mediaParcial: number,ntf: number){
    this.boletim.notaFinal = ntf;
    this.boletim.calcularMediaFinal();
    console.log(this.boletim.situacao)
  }
}
