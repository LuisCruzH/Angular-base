import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador es: {{counter}}</h3>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(1)">+1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset():void{
    this.counter = 10;
  }
}
