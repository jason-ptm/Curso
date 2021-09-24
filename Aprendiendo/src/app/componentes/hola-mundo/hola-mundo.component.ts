import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  @Input() nameUser: any;

  constructor() { }

  ngOnInit(): void {
  }

}
