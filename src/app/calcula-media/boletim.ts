import { Situação } from "./situacao";

export class Boletim {
    bim1: number
    bim2: number
    bim3: number
    bim4: number
    situacao: Situação
    notaFinal: number
    mediaParcial: number 
    mediaFinal: number
    constructor(b1: number, b2: number, b3: number, b4: number) {
        this.mediaParcial = 0
        this.mediaFinal = 0
        this.notaFinal = 0
        this.bim1 = b1
        this.bim2 = b2
        this.bim3 = b3
        this.bim4 = b4
        this.situacao = Situação.cursando
    }

    calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
        this.mediaParcial  = (b1*2 + b2*2 + b3*3 + b4*3) / 10

        if (this.mediaParcial >= 60 && this.mediaParcial <= 100) {
         this.situacao = Situação.aprovado
        }

        if (0 < this.mediaParcial && this.mediaParcial < 60 ){
            this.situacao = Situação.final
        }

        return this.mediaParcial
    }
    

    obterSituacao() {
        return this.situacao
    }

    calcularMediaFinal() {
        this.mediaFinal = (this.mediaParcial + this.notaFinal) / 2

        if (this.mediaFinal >= 60) {
            this.situacao = Situação.aprovado
           }
   
           if (0 < this.mediaFinal && this.mediaFinal < 60 ){
               this.situacao = Situação.reprovado
           }
   
           return this.mediaFinal
    }
}