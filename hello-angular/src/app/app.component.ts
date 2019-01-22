import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello name="Jean"></app-hello>
    <br>
    <app-btn-counter [value]="colors.length"></app-btn-counter>
    <br>
    <app-clock></app-clock>
    <br>
    <app-dropdown [items]="colors" [selected]="selectedColor" (selectedChange)="selectedColor = $event"></app-dropdown>
    <app-dropdown [items]="colors" [(selected)]="selectedColor"></app-dropdown>
    <div style="width: 20px; height: 20px" [style.background]="selectedColor"></div>
  `,
  styles: []
})
export class AppComponent {
  colors = ['red', 'green', 'blue'];
  selectedColor = this.colors[1];
}
