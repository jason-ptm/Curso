import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{
    public titulo: String;
    public comentario: String;
    constructor(){
        this.titulo = 'Hola perras';
        this.comentario = 'PUTAS';
    }
}